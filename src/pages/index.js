import React from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

const AboutSection = styled.section`
  padding: 4rem 0;
`

const SkillsSection = styled.section`
  padding: 4rem 0;
  background-color: #f5f5f5;
`

const ServicesSection = styled.section`
  padding: 4rem 0;
`

const PortfolioSection = styled.section`
  padding: 4rem 0;
  background-color: #f5f5f5;
`

const ReferencesSection = styled.section`
  padding: 4rem 0;
`

const ContactSection = styled.section`
  padding: 4rem 0;
  background-color: #f5f5f5;
`

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection>
        <div>
          <h1>Your Name</h1>
          <p>Your Professional Title</p>
        </div>
        {/* Placeholder for profile image */}
        <div style={{ width: 200, height: 200, borderRadius: '50%', backgroundColor: '#ddd' }} />
      </HeroSection>

      <AboutSection>
        <h2>À Propos</h2>
        {/* About content will be populated from GraphQL */}
      </AboutSection>

      <SkillsSection>
        <h2>Compétences Techniques</h2>
        {/* Skills content will be populated from GraphQL */}
      </SkillsSection>

      <ServicesSection>
        <h2>Services</h2>
        {/* Services content will be populated from GraphQL */}
      </ServicesSection>

      <PortfolioSection>
        <h2>Portfolio</h2>
        {/* Portfolio content will be populated from GraphQL */}
      </PortfolioSection>

      <ReferencesSection>
        <h2>Références</h2>
        {/* References content will be populated from GraphQL */}
      </ReferencesSection>

      <ContactSection>
        <h2>Contactez-moi</h2>
        {/* Contact form will be added here */}
      </ContactSection>
    </Layout>
  )
}

export default IndexPage
