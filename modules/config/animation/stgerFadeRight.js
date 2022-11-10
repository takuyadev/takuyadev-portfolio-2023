const stgerFadeRightAnim = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.15,
      },
   },
}

const stgerFadeRightItem = {
   hidden: { opacity: 0, x: -100 },
   show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1.0] },
   },
}

export { stgerFadeRightAnim, stgerFadeRightItem }