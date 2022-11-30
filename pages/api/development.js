export default function handler(req, res) {
   res.status(200).json(
      {
         highlights: [
            {
               title: "Srawana Weather App",
               description: "Weather application using your geolocation as well as OpenWeather API.",
               img: "/img/development/srawana_weather.webp",
               href: "https://srawana-weather-app.netlify.app/"
            },
            {
               title: "Ghibli Movielist",
               description: "Movie searching application using both REST API as well as localStorage to store your favorite movies.",
               img: "/img/development/ghibli_movie.webp",
               href: "https://ghibli-movielist.netlify.app/"
            },
            {
               title: "Shelfie",
               description: "Food application made using Next.js to show the user more accurate expiration dates.",
               img: "/img/development/shelfie.webp",
               href: "https://shelfie-takuyatoyokawa.vercel.app/Homepage"
            },
         ],
         projects: [
            {
               title: "Shelfie",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
               github: "https://shelfie-takuyatoyokawa.vercel.app/Homepage"
            },
            {
               title: "Shelfie",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
               github: "https://shelfie-takuyatoyokawa.vercel.app/Homepage"
            },
            {
               title: "Shelfie",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
               github: "https://shelfie-takuyatoyokawa.vercel.app/Homepage"
            },
            {
               title: "Shelfie",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
               github: "https://shelfie-takuyatoyokawa.vercel.app/Homepage"
            },
            {
               title: "Shelfie",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
               github: "https://shelfie-takuyatoyokawa.vercel.app/Homepage"
            },
            {
               title: "Shelfie",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
               github: "https://shelfie-takuyatoyokawa.vercel.app/Homepage"
            }
         ]
      }
   )
}
