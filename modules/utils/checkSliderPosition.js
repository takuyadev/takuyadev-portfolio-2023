const checkPosition = (pathName) => {
   switch (pathName) {
      case "/":
         return (-4)
         break;
      case "/experience":
         return 15.666
         break;
      case "/development":
         return 33.333
         break;
      case "/design":
         return 52.000
         break;
      case "/contact":
         return 70.666
         break;
      case "/about":
         return 89
         break;
   }
}

export { checkPosition }