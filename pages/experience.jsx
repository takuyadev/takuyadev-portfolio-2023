// Packages
import axios from "axios"

// Components
import PageHeader from "@/organisms/general/PageHeader"
import ArticleCards from "@/organisms/experience/ArticleGallery"

function Experience({ data }) {
  return (
    <>
      <PageHeader
        title="Experience"
        subtitle="My experience and achievements in both educational and work environments"
      />
      <ArticleCards data={data} />
    </>
  )
}

// Static Site Generation
export async function getStaticProps() {
  const { data } = await axios.get(`http://localhost:3000/api/experience`)

  return {
    props: {
      data: data.data,
    },
  }
}

export default Experience
