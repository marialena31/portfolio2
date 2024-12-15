import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #663399;
`

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`

const HomeLink = styled(Link)`
  color: #663399;
  text-decoration: none;
  border: 2px solid #663399;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #663399;
    color: white;
  }
`

const NotFound = () => {
  return (
    <Layout>
      <NotFoundPage>
        <Title>404</Title>
        <Message>Oops! La page que vous recherchez n'existe pas.</Message>
        <HomeLink to="/">Retour à l'accueil</HomeLink>
      </NotFoundPage>
    </Layout>
  )
}

export default NotFound

export const Head = () => <title>Page non trouvée</title>
