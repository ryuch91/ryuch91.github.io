import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return(
    <Layout pageTitle="Who am I">
      <p> I'm the lazy developer~ </p>
      <Link to="/"> Back to home </Link>
    </Layout>
  )
}

export default AboutPage