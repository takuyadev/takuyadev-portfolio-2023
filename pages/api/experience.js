export default function handler(req, res) {
   res.status(200).json(
      {
         data: [
            {
               title: "Project 1",
               subtitle: "Subtitle",
               description: "Hello this is big description please notice me.",
               list: [
                  "hello",
                  "hello",
                  "hello",
               ]
            },
            {
               title: "Project 2",
               subtitle: "Subtitle",
               description: "Hello this is big description please notice me.",
               list: [
                  "hello",
                  "hello",
                  "hello",
               ]
            },
            {
               title: "Project 3",
               subtitle: "Subtitle",
               description: "Hello this is big description please notice me.",
               list: [
                  "hello",
                  "hello",
                  "hello",
               ]
            }
         ]
      }
   )
}
