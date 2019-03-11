import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const RuneFinder = () => {
  return(
    <Query query={gql`
      {
				Bloodborne_getRuneByName(name: "Blood Rapture 3") {
					name
					source {
						name
						connectCharacter {
							encounters {
								edges {
									node {
										quest {
											name
										}
										step
										location {
											name
										}
										firstAvailablePhase {
											name
										}
										terminalPhase {
											name
										}
										availableAfter
									}
								}
							}
						}
					}
				}
			}
    `}
    >
    {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
				if (error) return <p>Error :(</p>;

				let runeData = data
				console.log(runeData.Bloodborne_getRuneByName.name);
				console.log(runeData.Bloodborne_getRuneByName.source.name);
				// console.log(runeData);
				console.log(runeData.Bloodborne_getRuneByName.source.connectCharacter.encounters.edges[0].node.quest.name)
				console.log(runeData.Bloodborne_getRuneByName.source.connectCharacter.encounters.edges[0].node.step)
				console.log(runeData.Bloodborne_getRuneByName.source.connectCharacter.encounters.edges[0].node.location.name)
				return (
					<div>
						<h1>{runeData.Bloodborne_getRuneByName.name}</h1>
						<h1>comes from {runeData.Bloodborne_getRuneByName.source.name}</h1>
						<h1>in {runeData.Bloodborne_getRuneByName.source.connectCharacter.encounters.edges[0].node.location.name}</h1>
					</div>
				)

        // return data.rune.map(({ id, name }) => (
				// 	<div key={id}>
				// 			<p>{name} ({id})</p>
				// 	</div>
        // ));
    }}
		</Query>
	)
}

export default RuneFinder;