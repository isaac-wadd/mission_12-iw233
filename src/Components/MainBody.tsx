
import React from 'react'
import TeamList from './TeamList'
import teams from '../teamsData'

export default function MainBody() {
    return (
        <TeamList teams={ teams } />
    )
}
