// Packages
import { useState, forwardRef, useEffect } from "react"
import styled from "styled-components"

// Styled Components
const Icon = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg) scale(0.35) translateX(-25px);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  & span {
    display: block;
    position: absolute;
    height: 5px;
    width: 50%;
    background: ${({ theme }) => theme.dark.main};
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  & span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  & span:nth-child(1),
  & span:nth-child(2) {
    top: 0px;
  }

  & span:nth-child(3),
  & span:nth-child(4) {
    top: 18px;
  }

  & span:nth-child(5),
  & span:nth-child(6) {
    top: 36px;
  }

  &.open span:nth-child(1),
  &.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(2),
  &.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(1) {
    left: 5px;
    top: 7px;
  }

  &.open span:nth-child(2) {
    left: calc(50% - 5px);
    top: 7px;
  }

  &.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  &.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  &.open span:nth-child(5) {
    left: 5px;
    top: 29px;
  }

  &.open span:nth-child(6) {
    left: calc(50% - 5px);
    top: 29px;
  }
`

// Component
const Hamburger = forwardRef(({ isClosed }, ref) => {
  const [icon, setIcon] = useState()

  useEffect(() => {
    isClosed ? setIcon("") : setIcon("open")
  }, [isClosed])

  return (
    <Icon className={icon} ref={ref}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Icon>
  )
})

// Settings & Exports
Hamburger.displayName = "Hamburger"

export default Hamburger
