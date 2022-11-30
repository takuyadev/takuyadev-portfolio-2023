import axios from "axios"

const propsErrorHandler = async (url) => {
   try {
      const { data } = await axios.get(url)
      return {
         props: {
            data: data,
         },
      }
   } catch (error) {
      return {
         props: {
            data: null,
         },
      }
   }
}

export { propsErrorHandler }