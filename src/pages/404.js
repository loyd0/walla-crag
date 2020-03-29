import React from "react"

import Layout from "@layouts"
import SEO from "@components/seo"
import Section from "@sections"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Woops!" />
    <Section>
      <div className="px-4">
      <h2>Ooops, appears you're going on a walk somewhere that doesn't exist!</h2>
      <h3>Why don't you head back on well <Link className="text-green-400" to="/">trodden path...</Link></h3>
      </div>
    </Section>
  </Layout>
)

export default NotFoundPage
