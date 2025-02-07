import Best from '../components/Best'
import DONT from '../components/DontMiss'
import ESSENTIALS from '../components/Essentials'
import Featured from '../components/Featured'
import GEAR from '../components/GearUp'
import Hero from '../components/Hero'
import ICON from '../components/Icon'
import React from 'react'

export default function Page(){
  return(
    <div>
      <main>
        <Hero/>
        <Best/>
        <Featured/>
        <GEAR/>
        <DONT/>
        <ESSENTIALS/>
        <ICON/>
      </main>
    </div>
  )
}