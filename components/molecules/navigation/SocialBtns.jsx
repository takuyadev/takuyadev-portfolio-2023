// Packages
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { HiMail } from "react-icons/hi"

// Components
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"
import Inline from "@/atoms/containers/Inline"
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/animation/stgerFadeDown"

// Animations
const MotionInline = motion(Inline)
const MotionBtn = motion(PrimaryBtn)

// Component
const SocialBtns = forwardRef(({ className }, ref) => (
  <MotionInline
    ref={ref}
    className={className}
    variants={stgerFadeDownAnim}
    initial="hidden"
    animate="show"
  >
    <MotionBtn
      variants={stgerFadeDownItem}
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      href="mailto:takuya.k.toyokawa@protonmail.com"
      icon={<HiMail size={24} />}
      text="Email"
    />
    <MotionBtn
      variants={stgerFadeDownItem}
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/takuyadev"
      icon={<BsGithub size={20} />}
      text="Github"
    />
    <MotionBtn
      variants={stgerFadeDownItem}
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      href="https://linkedin.com/in/takuya-toyokawa/"
      icon={<BsLinkedin size={20} />}
      text="LinkedIn"
    />
  </MotionInline>
))

// Settings & Exports
SocialBtns.displayName = "SocialButtons"

export default SocialBtns
