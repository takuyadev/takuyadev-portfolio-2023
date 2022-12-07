const checkPosition = (pathName) => {
   switch (pathName) {
      case "/":
         return (-3)
         break;
      case "/experience":
         return 13.28
         break;
      case "/tools":
         return 29
         break;
      case "/development":
         return 44
         break;
      case "/design":
         return 60
         break;
      case "/contact":
         return 75
         break;
      case "/about":
         return 91
         break;
   }
}

export { checkPosition }