import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
}) => (
  <main className="DefaultPage">
    <PageHeader
      title={title}
      subtitle={"Smartvote Tibet is a user-friendly application, helping the Tibetan voters to make an informed decision on election day."}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <div class="Content ">
        <h1>Submit your questions for the elections 2021</h1>
        <p>“This is a serious and timely initiative. When it comes to our exile democracy, we are continually growing and learning. <em>Smartvote</em> is a brilliant tool and we hope Tibetans to make use of this technology”</p>
        <p><a class="Button" target="_blank" href="https://docs.google.com/forms/d/1cO41xpWCg7u9R9VMn2P2FBLHjmeiJFPTnKrfBo157l0/edit">Open form</a></p>
        <h2>How does Smartvote Tibet work?</h2>
        <ol>
        <li>Public submit questions for Sikyong and parliament candidates.</li>
        <li>Candidates answer selected 30 questions on a wide range of current issues.</li>
        <li>User answers the same set of questions.</li>
        <li>User receives a list of candidates that best match his/her preferences.</li>
        </ol>
        <p>
        <img class="Content--Image" src="https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/resize/1000x/" srcset="https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/preview/320x320/-/quality/lightest/320.jpg 320w,https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/preview/450x450/-/quality/lightest/450.jpg 450w,https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/preview/640x640/-/quality/lightest/640.jpg 640w,https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/preview/750x750/-/quality/lightest/750.jpg 750w,https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/preview/800x800/-/quality/lightest/800.jpg 800w,https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/preview/900x900/-/quality/lightest/900.jpg 900w,https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/preview/1000x1000/-/quality/lightest/1000.jpg 1000w,https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/preview/1200x1200/-/quality/lightest/1200.jpg 1200w,https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/preview/1500x1500/-/quality/lightest/1500.jpg 1500w,https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/preview/1600x1600/-/quality/lightest/1600.jpg 1600w,https://ucarecdn.com/872d7cf5-2b2e-4c12-99b9-eba6be36e06d/-/progressive/yes/-/format/auto/-/preview/2000x2000/-/quality/lightest/2000.jpg 2000w" sizes="100vw" title="" alt="" />
        </p>
        <h2>About the project</h2>
        <p>Smartvote Tibet is an initiative of “Project Democracy”, an association by a group of Tibetans who have a background in political science, history, psychology, technology and human rights law. The platform is an adapted version of Smartvote, which was first developed in 2003 by Politools in Switzerland. The tool has been successfully implemented for regional and national elections in Switzerland, Australia, Luxembourg, Austria, Scotland as well as in the European Union.</p></div>

      </div>
    </section>
  </main>
)

const DefaultPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <DefaultPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default DefaultPage

export const pageQuery = graphql`
  query DefaultPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
