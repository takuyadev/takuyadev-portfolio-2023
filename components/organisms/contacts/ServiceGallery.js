// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Components
import ServiceCard from "@/molecules/cards/ServiceCard";

// Styled Components
const Container = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  @media (max-width: 800px){
     grid-template-columns:1fr;

  }
`

const ServiceGallery = forwardRef(({ data }, ref) => (
   <Container ref={ref}>
      {data.map((item, i) => (
         <ServiceCard
            key={i}
            title={item.title}
            description={item.description}
            img={item.img}
         />
      ))}
   </Container>
))

// Settings & Exports
ServiceGallery.displayName = "ServiceGallery"

export default ServiceGallery