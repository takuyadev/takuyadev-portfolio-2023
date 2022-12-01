const wordAnimation = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
      transition: {
         staggerChildren: 0.03,
      },
   },
}

const letterAnimation = {
   initial: {
      y: 100,
      opacity: 0,
   },
   animate: {
      y: -1,
      opacity: 0.75,
      transition: {
         duration: 1,
      },
   },
}

export { letterAnimation, wordAnimation }