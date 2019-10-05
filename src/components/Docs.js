import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PageHeader from './PageHeader.js'

const Docs = props => {
  const getTypes = gql`
    {
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
    }
  `

  const whatIs = (
    <div className='col-12 col-md-6 '>
      <h5>
        Introduction to <i>Bloodborne</i> and Bloodborne Ally
      </h5>
      <div className='p-2 my-3 border shadow rounded'>
        <p className='mb-2'>
          Bloodborne Ally is an API written in GraphQL that queries a
          loot-focused relational database built around the masterwork horror
          game <i>Bloodborne</i> made by FromSoftware.
        </p>
        <p className='mb-2'>
          For those unfamiliar with the game, it takes place in a rich and
          complex world. The player must dig deeply into arcane secrets to
          discover many of the items, places, bosses, characters, and storylines
          the game has to offer.
        </p>
        <p className='mb-2'>
          Even after overcoming the challenging combat of <i>Bloodborne</i>, it
          can still be difficult to make sense of what is happening in the
          world. There are many written and video guides to help players find
          what they're missing, understand what they're doing, and navigate
          terrifying mazes. This API has a different goal and is not intended to
          replicate any of that work.
        </p>
      </div>
      <h5>The Purpose of Bloodborne Ally</h5>
      <div className='p-2 my-3 border shadow rounded'>
        <p className='mb-2'>
          This API is a navigational aid for experienced players. For those who
          have drunk deeply of the Old Blood and have uncovered all the horrors
          hidden in Yharnam and beyond, there are many reasons to start over and
          do it all again. That's where Bloodborne Ally comes in. This API is
          designed to generate a checklist, or a guide only in the barest sense,
          of when and where an experienced player should go to get all the loot
          in the game.
        </p>
        <p className='mb-2'>
          The database this API queries does not contain any detailed
          instructions on where or how to acquire items or meet NPCs. Written
          descriptions are kept to a minimum, and the power of a relational
          database is used to make it easy to find and remember what needs to be
          done and when. For example, a query to find information about a
          certain Weapon can also return a list of every Gesture that the player
          should have acquired before the Weapon is even available.
        </p>
        <p className='mb-2'>
          The above is only one example - it's possible to start at any endpoint
          (also called a Type) and return information from any other endpoint
          through the relationships built into the Schema (the list of all
          Types). It's important to have an understanding of GraphQL and
          relational databases befoer attempting to write your own queries with
          this API, so if you're new to the subject you can read more{' '}
          <a
            href='https://graphql.org/learn/'
            rel='noopener noreferrer'
            target='_blank'
          >
            here
          </a>
          .
        </p>
      </div>
      <h5>Types</h5>
      <div className='p-2 my-3 border shadow rounded'>
        <p className='mb-2'>
          Each endpoint lists all of its fields (with each field guaranteed to
          exist marked by a red asterisk) and the type of that field. The type
          may be a primitive, such as String, or it may be another endpoint
          Type, such as <code>Bloodborne_Location</code>. The word Connection at
          the end of a type means that this is an automatically generated
          relationship, and the query construction is slightly different, but
          otherwise it is the same as an endpoint Type. For example, a type
          listed as <code>_Bloodborne_BossConnection</code> means that the
          result will be of the endpoint Type <code>Bloodborne_Boss</code>.
        </p>
      </div>
    </div>
  )

  const typeDivs = (
    <Query query={getTypes}>
      {({ loading, error, data }) => {
        let types = []
        if (loading) return null
        if (error) {
          console.log(error)
        }

        console.log(data)
        console.log(props.allDocs)
        types = data ? data.__schema.types : props.allDocs

        types.sort((a, b) => {
          return a.name > b.name ? 1 : -1
        })

        return (
          <div id='accordion' className='col-12 col-md-6'>
            {types.map((x, i) => {
              if (props.allTypes.includes(x.name)) {
                return (
                  <div key={i} className='card border-dark mb-1'>
                    <div
                      className='card-header bg-dark text-left'
                      id={'heading-' + i}
                    >
                      <h5 className='mb-0'>
                        <button
                          className='btn btn-link text-white'
                          data-toggle='collapse'
                          data-target={'#collapse-' + i}
                          aria-expanded='false'
                          aria-controls={'collapse-' + i}
                        >
                          {x.name}
                        </button>
                      </h5>
                    </div>
                    <div
                      id={'collapse-' + i}
                      className='collapse'
                      aria-labelledby={'heading-' + i}
                      data-parent='#accordion'
                    >
                      <div className='card-body'>
                        <small className='px-1 mb-3 d-block'>
                          {x.description}
                        </small>
                        <ul className='text-left list-unstyled py-0 px-1 m-0'>
                          <li className='row py-2 font-weight-bold'>
                            <p className='col-5'>Field</p>
                            <p className='col-7'>Type</p>
                          </li>
                          {x.fields.map((field, index, array) => {
                            let required
                            let typeType = field.type.name
                            if (field.type.ofType) {
                              required = '*'
                              typeType = field.type.ofType.name
                            }
                            let border = ' border-bottom'
                            if (index === array.length - 1) border = ''
                            if (field.name === 'id') field.description = ''
                            return (
                              <li key={index} className={'row py-2' + border}>
                                <div className='col-5 border-right'>
                                  {field.name}
                                  <span className='text-danger'>
                                    {required}
                                  </span>
                                </div>
                                <span className='col-7'>{typeType}</span>
                                <small className='col-12 text-muted'>
                                  {field.description}
                                </small>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              } else return null
            })}
          </div>
        )
      }}
    </Query>
  )

  return (
    <div className='pb-3'>
      <PageHeader
        page={'Schema'}
        description='This page displays the entire schema. Click on a type to view its description and a list of each of its fields.'
      ></PageHeader>
      <main className='row'>
        {whatIs}
        {typeDivs}
      </main>
    </div>
  )
}

export default Docs
