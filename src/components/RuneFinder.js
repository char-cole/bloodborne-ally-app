import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

// const examineRune = gql`{
//   Bloodborne_getRuneById(id: "") {
//     name
//     isCovenant
//     tier
//     effect
//     pickUp {
//       name
//     }
//     droppedByBoss {
//       edges {
//         node {
//           name
//           location {
//             name
//           }

//         }
//       }
//     }
//     droppedByNPC {
//       edges {
//         node {
//           name
//           location {
//             name
//           }
//           quest {
//             name
//           }
//           step
//           firstAvailablePhase {
//             name
//           }
//         }
//       }
//     }
//     rewardFrom {
//       edges {
//         node {
//           name
//           location {
//             name
//           }
//           quest {
//             name
//           }
//           step
//           firstAvailablePhase {
//             name
//           }
//         }
//       }
//     }
//   }
// }`

class RuneFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }
  getRunes = gql`{
    Bloodborne_listRune(first: 10, after: "") {
      edges {
        node {
          name
        }
      }
    }
  }`

  getUser = gql`{
    getUserByEmail(email: "charcole@protonmail.com") {
      firstName
    }
  }`

  render() {
    return(
      <Query query={this.getRunes}
      >
      {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          // let runeData = data.Bloodborne_listRune.edges
          // console.log(runeData)
          console.log(data)
          return (
            <h1>{data}</h1>
            // <input
            //   name="rune"
            //   type="text"
            //   onChange={(e) => {
            //     this.setState({
            //       searchString: e.target.value
            //     })
            //   }}
            //   value={this.state.searchString}
            // />
          )
      }}
      </Query>
    )
  }
}

export default RuneFinder;