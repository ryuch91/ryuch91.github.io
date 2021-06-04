import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return(
    <main>
      <title> About me </title>
      <h1> Who Am I </h1>
      <p> I'm the lazy developer~ </p>
      <Link to="/"> Back to home </Link>
    </main>
  )
}

export default AboutPage