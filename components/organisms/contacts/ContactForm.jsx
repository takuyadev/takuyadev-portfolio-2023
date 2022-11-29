// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { useState, useRef, useEffect } from "react"

// Modules
import { sendEmail } from "@/utils/sendEmail"

// Components
import Form from "@/atoms/containers/Form"
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"
import InputWithLabel from "@/molecules/inputs/InputWithLabel"
import TextAreaWithLabel from "@/molecules/inputs/TextAreaWithLabel"
import Loading from "@/atoms/icon/Loading"

// Styled Components
const StyledForm = styled(Form)`
  @media (max-width: 1024px) {
    min-height: 500px;
  } ;
`

// Component
const ContactForm = ({ env, className, ...otherProps }) => {
  const emptyForm = {
    name: "",
    email: "",
    message: "",
  }

  const [status, setStatus] = useState({ status: null })
  const [statusMessage, setStatusMessage] = useState("Send")
  const [isInputDisabled, setIsInputDisabled] = useState()
  const [icon, setIcon] = useState("")
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [form, setForm] = useState({ ...emptyForm })

  const formRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  // Updates form onChange input in the form
  const updateForm = (value) =>
    setForm((prev) => {
      return {
        ...prev,
        ...value,
      }
    })

  // Callback function that takes in values to mass update state
  const updateState = (message, values, input, icon, resetForm) => {
    setStatusMessage(message)
    setIsInputDisabled(input)
    setIcon(icon)
    values && setForm(values)
    resetForm && formRef.current.reset()
  }

  // Checks status of the form and tracks and displays progress

  // Disable sending the message if form is not filled out yet
  useEffect(() => {
    if (form.name && form.email && form.message) {
      setIsButtonDisabled(false)
      setStatusMessage("Send")
    } else {
      setIsButtonDisabled(true)
    }
  }, [form])

  // Check and update form status to display and track form progress
  useEffect(() => {
    const checkFormProgress = (status) => {
      switch (status) {
        case 200:
          updateState("Sent message!", false, false, "", true)
          break
        case "sending":
          console.log(status.status)
          updateState("Sending...", false, true, <Loading />, false)
          break
        case 400:
          updateState("Error sending", false, false, "", false)
          break
        default:
          updateState("Send", false, false, "", false)
          break
      }
    }
    checkFormProgress(status.status)
  }, [status])

  return (
    <StyledForm
      ref={formRef}
      className={className}
      onSubmit={(e) => sendEmail(e, env, formRef, setStatus)}
      {...otherProps}
    >
      <InputWithLabel
        required={true}
        ref={nameRef}
        disabled={isInputDisabled}
        onChange={(e) => updateForm({ name: e.target.value })}
        label="Name"
        placeholder="ex. John Doe"
        name="user_name"
      />
      <InputWithLabel
        required={true}
        ref={emailRef}
        disabled={isInputDisabled}
        onChange={(e) => updateForm({ email: e.target.value })}
        type="email"
        label="Email Address"
        placeholder="ex. example@address.com"
        name="email"
      />
      <TextAreaWithLabel
        required={true}
        ref={messageRef}
        disabled={isInputDisabled}
        onChange={(e) => updateForm({ message: e.target.value })}
        placeholder="Enter your message here... (Max 300 characters)"
        label="Message"
        name="message"
        maxLength="300"
      />
      <PrimaryBtn
        disabled={isButtonDisabled}
        text={statusMessage}
        icon={icon}
      />
    </StyledForm>
  )
}

// Settings & Exports
ContactForm.displayName = "ContactForm"

export default ContactForm
