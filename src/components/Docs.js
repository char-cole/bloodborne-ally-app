import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PageHeader from "./PageHeader.js"

const Docs = (props) => {
  let page = "Docs"
  let getTypes = gql`{
    __schema {
      types {
        name
        description
        fields {
          name
          description
          type {
            name
            ofType {
              name
            }
          }
        }
      }
    }
  }`

  let typeDivs = (
    <Query query={getTypes}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) return `Error!: ${error}`;

        let sortedTypes = data.__schema.types.sort((a,b) => {
          let names = [a.name, b.name];
          return (names[0] > names[1]) ? 1 : -1
        });

        return (
          <div className="pb-3">
            <PageHeader page={page} description="This page lists the entire schema. Each type displays each of its available fields."></PageHeader>
            <div className="row">
              <div id="accordion" className="col">
                {sortedTypes.map((x,i) => {
                  if (props.allTypes.includes(x.name)) {
                    console.log(x);
                    return (
                      <div key={i} className="card">
                        <div className="card-header text-left" id={"heading-"+i}>
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link"
                              data-toggle="collapse"
                              data-target={"#collapse-"+i}
                              aria-expanded="false"
                              aria-controls={"collapse-"+i}
                            >
                              {x.name}
                            </button>
                          </h5>
                        </div>
                        <div id={"collapse-"+i}
                          className="collapse"
                          aria-labelledby={"heading-"+i}
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <small className="px-1 mb-3 d-block">{x.description}</small>
                            <ul className="text-left list-unstyled py-0 px-1 m-0">
                              <li className="row py-2 font-weight-bold">
                                <p className="col-5">
                                  Field
                                </p>
                                <p className="col-7">
                                  Type
                                </p>
                              </li>
                              {x.fields.map((field, index, array) => {
                                let required = "";
                                let typeType = field.type.name;
                                if (field.type.ofType) {
                                  required = "*";
                                  typeType = field.type.ofType.name;
                                }
                                let border = " border-bottom";
                                if (index === array.length-1) border = "";
                                if (field.name === "id") field.description = "";
                                return (
                                  <li key={index} className={"row py-2"+border}>
                                    <div className="col-5">
                                      {field.name}<span className="text-danger">{required}</span>
                                    </div>
                                    <span className="col-7">
                                      {typeType}
                                    </span>
                                    <small className="col-12 text-muted">{field.description}</small>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  else return null;
                })}
              </div>
              <div className="col mt-10 text-left">
                <h5>
                  How to use this API
                </h5>
                <p>
                  To find a specific entry, valid queries are of the format&nbsp;<code>Bloodborne_get[Type]By[Name/ID]</code>
                </p>
                <p>
                  To list all entries (currently capped at first 10 results), valid queries are of the format&nbsp;
                  <code>Bloodborne_list[Type]</code>. This query allows filters.
                </p>
                <p>
                  In a GraphQL API, fields can be populated by specific entries of other type.
                  For example, the type "Location" has a field named "headstone". Instead of a
                  String, the value of this field is a "Bloodborne_Headstone". When querying a
                  Location, the query can extend into the fields of the Headstone type.
                </p>
                <p>
                  This allows a single query to begin at any node in the API and reach almost any other node.
                </p>
                <p>
                  For example, the query <code>Bloodborne_getRuneByName(name: "Blood Rapture 3")</code> could return
                  any of the fields of the type Bloodborne_Rune. Since some of these fields are themselves
                  types, it could also return any of the fields of <i>those</i> types. This can continue
                  infinitely.
                </p>
                <p>
                  If we know the rune "Blood Rapture 3" is dropped by an NPC (in this case, Bloody Crow of Cainhurst),
                  we could access the name of a specific Encounter (a step of a Quest) that would be made unavailable
                  by the beginning of whichever Phase "Blood Rapture 3" first becomes available. The following path
                  identifies this information (in this case, a string) in the data object returned by the above query:
                </p>
                <p>
                  <code>
                    data.droppedByNPC.edges[0].node.firstAvailablePhase.blocksEncounters.edges[0].node.name
                  </code>
                </p>
                <p>
                  This would return the name (<code>.name</code>)
                  of the first encounter (<code>.edges[0].node</code>)
                  in an array of encounters (<code>.edges</code>)
                  that become unavailable (<code>.blocksEncounters</code>)
                  at the start of the Blood Moon phase (<code>.firstAvailablePhase</code>),
                  which is when the encounter (<code>.droppedByNPC</code>)
                  with Bloody Crow of Cainhurst (<code>data.droppedByNPC.edges[0].node.target.name</code>)
                  first becomes available during Eileen's Quest (<code>data.droppedByNPC.edges[0].node.quest.name</code>).
                </p>
              </div>
            </div>
          </div>
        )
      }}
    </Query>
  )

  return (
    typeDivs
  )
}

export default Docs