// Packages
import styled from "styled-components"
import { forwardRef } from "react"
import { BsLinkedin, BsGithub, BsLink } from "react-icons/bs"
import { HiMail } from "react-icons/hi"

// Components
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"

// Styled Components
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 1em;
`

const InlineBtn = styled(PrimaryBtn)`
  display:inline-flex;
  height: 36px;
`

// Component
const SocialButtons = forwardRef(({ }, ref) => (
  <ButtonContainer ref={ref}>
    <InlineBtn icon={<HiMail size={24} />} text="Email" />
    <InlineBtn icon={<BsGithub size={24} />} text="Github" />
    <InlineBtn icon={<BsLinkedin size={22} />} text="LinkedIn" />
  </ButtonContainer>
))

// Settings & Exports
SocialButtons.displayName = "SocialButtons"

export default SocialButtons