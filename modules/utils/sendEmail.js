import emailjs from "@emailjs/browser"
// Requires private keys
const sendEmail = (e, ref, setStatus) => {
   e.preventDefault()
   setStatus({ status: "sending" })
   emailjs
      .sendForm(
         process.env.SERVICE_ID,
         process.env.TEMPLATE_ID,
         ref.current,
         process.env.PUBLIC_KEY
      )
      .then(
         (result) => {
            setStatus(result)
         },
         (error) => {
            setStatus(error)
         }
      )
}

export { sendEmail }