// Packages
import styled from "styled-components"
import { forwardRef } from "react"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { HiMail } from "react-icons/hi"

// Components
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"

// Styled Components
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 1em;

  & > a {
    display:inline-flex;
  }
`

// Component
const SocialButtons = forwardRef(({ }, ref) => (
  <ButtonContainer ref={ref}>
    <PrimaryBtn as="a" target="_blank" rel="noopener noreferrer" href="mailto:takuya.k.toyokawa@protonmail.com" icon={<HiMail size={24} />} text="Email" />
    <PrimaryBtn as="a" target="_blank" rel="noopener noreferrer" href="https://github.com/takuyadev" icon={<BsGithub size={20} />} text="Github" />
    <PrimaryBtn as="a" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/takuya-toyokawa/" icon={<BsLinkedin size={20} />} text="LinkedIn" />
  </ButtonContainer>
))

// Settings & Exports
SocialButtons.displayName = "SocialButtons"

export default SocialButtons