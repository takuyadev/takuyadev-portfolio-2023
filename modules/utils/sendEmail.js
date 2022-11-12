import emailjs from "@emailjs/browser"

// Requires private keys
const sendEmail = (e, ref) => {
   e.preventDefault()

   emailjs
      .sendForm(
         process.env.NEXT_PUBLIC_SERVICE_ID,
         process.env.NEXT_PUBLIC_TEMPLATE_ID,
         ref.current,
         process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
         (result) => {
            console.log(result.text)
         },
         (error) => {
            console.log(error.text)
         }
      )
}

export { sendEmail }