import emailjs from "@emailjs/browser"

// Requires private keys
const sendEmail = (e, ref, setStatus) => {
   e.preventDefault()
   setStatus({ status: "sending" })
   emailjs
      .sendForm(
         process.env.NEXT_PUBLIC_SERVICE_ID,
         process.env.NEXT_PUBLIC_TEMPLATE_ID,
         ref.current,
         process.env.NEXT_PUBLIC_PUBLIC_KEY
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