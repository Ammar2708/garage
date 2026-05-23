import About from '@/components/home/About'
import Appointment from '@/components/home/appointment'
import Card from '@/components/home/Card'
import Comment from '@/components/home/Comment'
import Engine from '@/components/home/Engine'
import Exp from '@/components/home/Exp'
import Form from '@/components/home/Form'
import Hero from '@/components/home/Hero'
import Sol from '@/components/home/Sol'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Card/>
      <Exp/>
      <Form/>
      <Engine/>
      <Sol/>
      <Comment/>
      <Appointment/>
    </div>
  )
}

export default page
