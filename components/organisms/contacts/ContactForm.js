// Packages
import { useState, useRef } from "react";

// Modules
import { sendEmail } from "@/utils/sendEmail";

// Components
import Form from "@/atoms/containers/Form";
import SubmitBtn from "@/atoms/buttons/SubmitBtn";
import InputWithLabel from "@/molecules/inputs/InputWithLabel";
import TextAreaWithLabel from "@/molecules/inputs/TextAreaWithLabel";

// Component
const ContactForm = ({ ref }) => {
   const form = useRef()

   return (
      <Form ref={form} onSubmit={(e) => sendEmail(e, form)}>
         <InputWithLabel
            label="Name"
            placeholder="ex. John Doe"
            name="user_name"
         />
         <InputWithLabel
            type="email"
            label="Email Address"
            placeholder="ex. example@address.com"
            name="email"
         />
         <TextAreaWithLabel
            placeholder="Enter your message here..."
            label="Message"
            name="message"
         />
         <SubmitBtn text="Send message" value="Send" />
      </Form>
   )
}

// Settings & Exports
ContactForm.displayName = "ContactForm"

export default ContactForm