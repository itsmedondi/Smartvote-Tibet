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
      subtitle={"Smartvote Tibet is an user-friendly application, helping the Tibetan voters to make an informed decision on election day."}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <div class="Content "><h1>How does Smartvote Tibet work?</h1>
        <ol>
        <li>Public participate in development of questions.</li>
        <li>Candidates for Sikyong and Parliament answer selected 30 questions</li>
        <li>Users (Voters) answer the same questions on the smartvote Tibet website.</li>
        <li>Users receive a ranked list of candidates for Sikyong and Parliament that best match their political profile</li>
        </ol>
        <p>Infographic here</p>
        <h2>Submit your questions for the elections 2021</h2>
        <p>“This is a serious and timely initiative. When it comes to our exile democracy, we are continually growing and learning. <em>Smartvote</em> is a brilliant tool and we hope Tibetans to make use of this technology”</p>
        <h2><a class="Button" target="_blank" href="https://docs.google.com/forms/d/1cO41xpWCg7u9R9VMn2P2FBLHjmeiJFPTnKrfBo157l0/edit">Open form</a></h2>
        <h2>Newsletter</h2>

<!-- 
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
  #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
  /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
     We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
-->
<div id="mc_embed_signup">
<form action="https://smartvote-tibet.us10.list-manage.com/subscribe/post?u=d0f78d2dcf8957b1c6a9afdfc&amp;id=4c1cbf5ece" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
  
  <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d0f78d2dcf8957b1c6a9afdfc_4c1cbf5ece" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>


        <h2>About the project</h2>
        <p>Smartvote Tibet is an initiative of “Project Democracy”, an association by a group of Tibetans who have a background in political science, history, psychology, technology and human rights law. The platform is an adapted version of Smartvote, which was first developed in 2003 by Politools in Switzerland. The tool has been successfully implemented for regional and national elections in Switzerland, Australia and Luxembourg, Austria, Scotland as well as in the European Union.</p></div>

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
