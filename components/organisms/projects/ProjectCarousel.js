// Packages
import styled from "styled-components";

// Componetns
import ImageCardL from "@/molecules/ImageCard/Large";

// Styled Components
const CarouselCont = styled.div`
   width: 100%;
   grid-column: span 4;
   overflow: auto;
   height: auto;
`


const InnerCont = styled.div`
   display:inline-flex;
   justify-content: flex-start;
`

function ProjectCarousel({ data }) {
   return (
      <CarouselCont>
         <InnerCont>

            {data.map((item, i) => {
               return (
                  <ImageCardL key={i} />
               )
            })}
         </InnerCont>

      </CarouselCont>
   )
}

export default ProjectCarousel