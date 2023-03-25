
import React from 'react'
import Team from './Team'

export default function TeamList({ teams } : { teams: any }) {
    return (
        teams.map((team: any) => {
            return <Team key={team.tid} name={team.school} mascot={team.name} city={team.city} state={team.state} />
        })
    )
}
