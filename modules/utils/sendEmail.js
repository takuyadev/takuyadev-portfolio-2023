import emailjs from "@emailjs/browser"
// Requires private keys
const sendEmail = (e, env, ref, setStatus) => {
   e.preventDefault()
   setStatus({ status: "sending" })
   emailjs
      .sendForm(
         env.SERVICE_ID,
         env.TEMPLATE_ID,
         ref.current,
         env.PUBLIC_KEY
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