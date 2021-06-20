import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import ProfileCard from "../components/ProfileCard"
import ProfileCell from "../components/ProfileCell"

const AboutPage = () => {
  return(
    <Layout pageTitle="Who am I">
      <ProfileCard />
      <ProfileCell title="Skill Stack" description="What can I use"/>
      <ProfileCell title="Projects" description="What I did"/>
      <ProfileCell title="Career" description="Where I belonged"/>
      <Link to="/"> Back to home </Link>
    </Layout>
  )
}

export default AboutPage