// Packages
import styled from "styled-components"
import Image from "next/image"

// Styled Components
const Container = styled.div`
   height: 100%;
   grid-area: "hero";
   align-self: flex;
   justify-self: self-start;
   align-content: center;
   grid-column: span 2;
   z-index: 0;
   transition: transform 1s cubic-bezier(0.61, 1, 0.88, 1);
   & img {
      object-fit: cover;
      transform: translateX(40%);
   }

`

function Hero() {
   return (
      <Container>
         <Image
            layout="fill"
            src="/img/headshot.png"
            alt="Hero, with Takuya Toyokawa"
         />
      </Container >
   )
}

export default Hero