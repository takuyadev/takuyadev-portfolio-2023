// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Components
import ServiceCard from "@/molecules/ServiceCard";

// Styled Components
const Container = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
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