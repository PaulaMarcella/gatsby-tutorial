import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Our Services</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias,
      sapiente eaque non temporibus voluptates totam, vitae officia nobis odio
      incidunt harum facilis, iusto corrupti voluptatum. Amet optio iusto non
      dolore minima explicabo distinctio debitis nulla nesciunt! Veritatis,
      praesentium qui.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage
