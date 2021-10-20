import React from 'react'
import { NavBar } from '../../components/navBar/NavBar'
import { PaswordResetCard } from '../../components/passwordReset/PaswordResetCard'

export const PaswordResetScreen = () => {
    return (
        <div>
            <NavBar/>
            <div style={{marginTop:"10%"}}></div>
            <PaswordResetCard/>
        </div>
    )
}
