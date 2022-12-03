export default function handler(req, res) {
   res.status(200).json(
      {
         highlights: [
            {
               title: "ScopeX Design System",
               type: "work",
               location: "ScopeX",
               tags: ["figma", "photoshop", "illustrator", "jira"],
               description: "ScopeX's Design System, featuring all of ScopeX's branding scheme and resource. (not all created design is shown on the featured link)",
               img: "/img/design/scopex.webp",
               live: "https://ghibli-movielist.netlify.app/"
            },
            {
               title: "Portfolio (2023)",
               type: "personal",
               location: "Personal",
               tags: ["figma", "photoshop", "illustrator"],
               description: "Updated portfolio with featuring both ",
               img: "/img/development/portfolio.webp",
               live: "https://srawana-weather-app.netlify.app/"
            },

            {
               title: "Day in the Life of Animal Crossing",
               type: "education",
               location: "BCIT",
               tags: ["illustrator", "after effects"],
               img: "/img/design/ac_animation.webp",
               description: "A small motion graphic animation based off the popular franchise Animal Crossing, created by crafting all assets in Illustrator and then animating using After Effects.",
               live: "https://www.youtube.com/watch?v=da6TO6zRZUs",
            },
         ],
         projects: [
            {
               title: "Shelfie",
               img: "/img/development/shelfie.webp",
               tags: ["figma", "photoshop", "illustrator"],
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage"
            },
            {
               title: "Toyo Sushi Menu",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Japan Magazine",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "CookOff!",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Nutrition Tracker",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Logeee",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "SingleMingle",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Salish Airways",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Keybuild Magazine",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Gameboy Flyer",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "The Proms Brochure",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Brochure Cover",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Clock Design",
               tags: ["figma", "photoshop", "illustrator"],
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },

         ]
      }
   )
}
