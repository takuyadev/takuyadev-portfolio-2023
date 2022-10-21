// Components
import ProjectCarousel from "@/organisms/projects/ProjectCarousel"

function About() {
  const projectData = [
    {
      title: "Project 1",
      description: "Big Description",
    },
    {
      title: "Project 2",
      description: "Big Description",
    },
    {
      title: "Project 3",
      description: "Big Description",
    },
  ]

  return (
    <>
      <ProjectCarousel data={projectData}></ProjectCarousel>
    </>
  )
}

export default About
