import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return(
    <Layout pageTitle="Not Found">
      <p> Failed to find page.. </p>
      <Link to="/"> Back to home </Link>
    </Layout>
  )
}

export default NotFoundPage