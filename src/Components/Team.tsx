
import React from 'react'

export default function Team(team : { name: any, mascot: any, city: any, state: any }) {
    const location = team.city.toString() + ', ' + team.state.toString()
    return (
        <>
            <br />
            <h4>{team.name} {team.mascot}</h4>
            <p>Location: {location}</p>
            <br />
        </>
    )
}
