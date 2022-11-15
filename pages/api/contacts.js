export default function handler(req, res) {
   res.status(200).json(
      {
         service: [
            {
               title: "Frontend Developer",
               description: "For developing and programming fully interactive websites from scratch.",
               img: "/img/frontend.jpg"
            },
            {
               title: "Fullstack Developer",
               description: "For developing both the interactive experience as well as handling the database.",
               img: "/img/fullstack.jpg"
            },
            {
               title: "UX / UI Designer",
               description: "For researching, and designing websites tailored towards user experience.",
               img: "/img/design.jpg"
            },
         ]
      }
   )
}
