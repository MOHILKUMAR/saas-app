import CompanionsCard from '@/components/CompanionsCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (

    <main>
     <h1 className='text-2xl'>Poppular Companions</h1>
    <section className='home-section'>
      <CompanionsCard 
           id = "123"
           name = "Neura the Brainy Explorere"
           topic = "Neural Network of the Brain"
           subject = "science"
           duration = {45}
           color = "#ffda6e"
         
      />
      <CompanionsCard 
           id = "456"
           name = "Countsy the Number Wizard"
           topic = "Derivatives & Integrals"
           subject = "Maths"
           duration = {30}
           color = "#e5d0ff"
      />
      <CompanionsCard 
           id = "789"
           name = "Verba the Vocabulary building"
           topic = "language"
           subject = "English Literature"
           duration = {30}
           color = "#BDE&FF"
      />
  
    </section>
    
     <section className='home-section'>
      <CompanionsList
       title = "Recently completed Sessions"
       companions = {recentSessions}
       classNames ="w-2/3 max-lg:w-full"
      />
      <CTA />
     </section>

    </main>
  )
}

export default Page