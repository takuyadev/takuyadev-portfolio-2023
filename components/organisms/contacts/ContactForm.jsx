// Packages
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

const StyledForm = styled(Form)`
  @media (max-width: 1024px) {
    min-height: 500px;
  } ;
`

// Component
const ContactForm = () => {
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

  const updateForm = (value) =>
    setForm((prev) => {
      return {
        ...prev,
        ...value,
      }
    })

  useEffect(() => {
    if (form.name && form.email && form.message) {
      setIsButtonDisabled(false)
      setStatusMessage("Send")
    } else {
      setIsButtonDisabled(true)
    }
  }, [form])

  useEffect(() => {
    if (status.status === 200) {
      setStatusMessage("Message sent!")
      setForm({ name: "", email: "", message: "" })
      setIsInputDisabled(false)
      setIcon("")
      formRef.current.reset()
    } else if (status.status === "sending") {
      setStatusMessage("Sending...")
      setIcon(<Loading />)
      setIsInputDisabled(true)
    } else if (status.status === null) {
      setIcon("")
      setStatusMessage("Send")
      setIsInputDisabled(false)
    } else {
      setIcon("")
      setStatusMessage("Error sending")
      setIsInputDisabled(false)
    }
  }, [status])

  return (
    <StyledForm
      ref={formRef}
      onSubmit={(e) => sendEmail(e, formRef, setStatus)}
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
