import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">

        <div class="Content ">
        <h1>རྣམ་དཔྱོད་ལྡན་པའི་བོད་མིའི་འོས་གང་འདྲ་སྒྲུབ་ཐུབ།</h1>
        <p>༡་ མི་དམངས་གིས་དྲི་བ་འདྲི་ནས་མཉམ་ཞུགས་བྱ།</p>
        <p>༢་ དེ་ནས་སྲིད་སྐྱོང་དང་སྤྱི་མཐུས་འོས་མི་རྣམས་ཀྱིས་དྲི་བ་ ༣༠ ལན་གདབ།</p>
        <p>༣་ བཀོལབདག་ (འོས་ཤོག་བླུགས་མཁན་) རྣམས་ཀྱིས་དྲ་ལྗོངས་འདིའི་ནང་དྲི་བ་དེ་དག་གཅིག་པར་ལན་གདབ།</p>
        <p>༤་ བཀོལ་བདག་རྣམས་ཀྱི་ཆབ་སྲིད་བསམ་ཕྱོགས་དང་ཇི་མཐུན་སྲིད་སྐྱོང་ངམ་སྤྱི་མཐུས་འོས་མི་གོ་རིམ་བཞིན་ངོ་སྤྲོད་བྱུང་ཐུབ།</p>
        <p>Infographic here</p>
        <h2>༢༠༢༡ ལོའི་འོས་བསྡུའི་ཆེད་དུ་དྲི་བ་ཐོ་བཀོད་གནང་རོགས།</h2>
        <p>“This is a serious and timely initiative. When it comes to our exile democracy, we are continually growing and learning. <em>Smartvote</em> is a brilliant tool and we hope Tibetans to make use of this technology”</p>
        <h2><a target="_blank" class="Button" href="https://docs.google.com/forms/d/1cO41xpWCg7u9R9VMn2P2FBLHjmeiJFPTnKrfBo157l0/edit">Open form</a></h2>
        <h2>ལས་འཚར་གྱི་སྐོར།</h2>
        <p>རྣམ་དཔྱོད་ལྡན་པའི་བོད་མིའི་འོས་ཞེས་པ་ནི་༼དམངས་གཙོའི་ལས་འཆར་༽གྱིས་སྣེ་ཁྲིད་བྱས་པ་ཞིག་ཡིན་པ་དང་། ཚོགས་པ་འདི་ནི་ཆབ་སྲིད་ཚན་རིག་དང་། ལོ་རྒྱུས། སེམས་ཁམས་རིག་པ། གློག་ཀླད་འཕྲུལ་ཆས། འགྲོ་བ་མིའི་ཐོབ་ཐང་སོགས་ཤེས་ཡོན་གྱི་རྒྱབ་ལྗོངས་ཕུན་སུམ་ཚོགས་པོ་དང་ལྡན་པའི་ཤེས་ལྡན་བོད་མིའི་མཉམ་ཞུགས་ཀྱི་སྣེ་ཁྲིད་བྱས་པའི་ལས་གཞི་ཞིག་རེད། རྣམ་དཔྱོད་ལྡན་པའི་འོས་ཞེས་པའི་སྡིངས་ཆ་འདི་ཐོག་མར་སུད་སི་པོ་ལི་ཀྲུལས་བཟོ་ལས་ཁང་གིས་ ༢༠༠༣ ནང་གསར་སྐྲུན་གནང་ཚརཡོད་པ་། དེ་ལས་ང་ཚོས་སྤྱོད་བཞིན་པའི་མིང་འདི་དཔེར་ལེན་པ་ཞིག་ཡིན། དེ་བཞིན་ས་གནས་དང་རྒྱལ་ཁབ་ཀྱི་འོས་ཤོག་ཐབས་ལམ་མ་ལག་སུད་སི་དང་། ཨོས་ཀྲི་ལི་ཡ། ལུཀ་ཙམ་བཀ།ཨོས་ཀྲི་ཡ། སི་ཀོཌ་ལེཌ། དེ་བཞིན་ཡུ་རོབ་མཉམ་འབྲེལ་ལ་སོགས་པས་ཀྱང་ལག་བསྟར་བྱས་ཏེ་ལེགས་གྲུབ་ཆེན་པོ་བྱུང་ཡོད།</p></div>

      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
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
