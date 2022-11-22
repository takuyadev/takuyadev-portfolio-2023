// Packages
import styled, { keyframes } from "styled-components"
import Image from "next/image"

// Styled Components
const slideLeft = keyframes`
   0% {
      opacity: 0;
      transform: translateX(100%);
   }
   100% {
      opacity: 1;
      transform: translateX(40%);
   }
`

const Container = styled.div`
   & img {
      width: 100vw;
      object-fit: cover;
      pointer-events: none;
      animation: ${slideLeft} 1.5s forwards ;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
   }

   @media (max-width:500px){
      background: red;
   }
`


function Hero() {
   return (
      <Container>
         <Image
            layout="fill"
            src="/img/headshot.png"
            alt="Hero, with Takuya Toyokawa"
            quality={75}
         />
      </Container >
   )
}

export default Hero