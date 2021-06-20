import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import ProfileCard from "../components/ProfileCard"

const AboutPage = () => {
  return(
    <Layout pageTitle="Who am I">
      <ProfileCard />
      <Link to="/"> Back to home </Link>
    </Layout>
  )
}

export default AboutPage