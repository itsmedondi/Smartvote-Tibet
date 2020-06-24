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
        <p>
        <img class="Content--Image" src="https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/resize/1000x/" srcset="https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/preview/320x320/-/quality/lightest/320.jpg 320w,https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/preview/450x450/-/quality/lightest/450.jpg 450w,https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/preview/640x640/-/quality/lightest/640.jpg 640w,https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/preview/750x750/-/quality/lightest/750.jpg 750w,https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/preview/800x800/-/quality/lightest/800.jpg 800w,https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/preview/900x900/-/quality/lightest/900.jpg 900w,https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/preview/1000x1000/-/quality/lightest/1000.jpg 1000w,https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/preview/1200x1200/-/quality/lightest/1200.jpg 1200w,https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/preview/1500x1500/-/quality/lightest/1500.jpg 1500w,https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/preview/1600x1600/-/quality/lightest/1600.jpg 1600w,https://ucarecdn.com/45a1a58a-83f9-48d4-8d02-3a6640642776/-/progressive/yes/-/format/auto/-/preview/2000x2000/-/quality/lightest/2000.jpg 2000w" sizes="100vw" title="" alt="" />
        </p>        
        <h2>༢༠༢༡ ལོའི་འོས་བསྡུའི་ཆེད་དུ་དྲི་བ་ཐོ་བཀོད་གནང་རོགས།</h2>
        <p>“འདི་ནི་མཁོ་ཞིང་དུས་ལ་མཚམས་པའི་སྣེ་ཁྲིད་ཅིག་རེད་འདུག ངེད་ཚོའི་བཙན་བྱོལ་གྱི་དམངས་གཙོའི་ལམ་ལུགས་འདི་ནི་འཕེལ་བཞིན་པ་དང་ངེད་ཚོས་གསར་དུ་ཤེས་བཞིན་ཡོད་རེད། རྣམ་དཔྱོད་ལྡན་པའི་འོས་ནི་ཡོ་བྱད་ཁྱད་དུ་འཕགས་པ་ཞིག་རེད་འདུག་པས་བོད་མི་ཚོས་འཕྲུལ་ཆས་འདི་བེད་སྤྱོད་བཏང་བའི་རེ་བ་ཡོད།”</p>
        <h2><a target="_blank" class="Button" href="https://docs.google.com/forms/d/1WoCGPtE7YdQxmdXldRLRHXJtZXM6_MeDBK7FO2ZecWo/edit?usp=sharing">འགེངས་ཤོག་ཁ་འབྱེད།</a></h2>
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
