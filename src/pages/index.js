import React from 'react'
import Layout from '../layouts'
import Hero from '../componets/home/hero'
import LearningOutcomes from '../componets/home/learning-outcomes'

export default function Home() {
  return (
    <Layout>
        <Hero />
        <LearningOutcomes />
    </Layout>
  )
}
