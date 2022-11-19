export default function handler(req, res) {
   res.status(200).json(
      {
         experience: [
            {
               title: "British Columbia Institution of Technology",
               subtitle: "Diploma, Digital Design and Development",
               time: "Sept 2019 - May 2021",
               description: "At Digital Design and Development, we learned modern web development frameworks and design software to create multiple cross-platform applications within various team environments that worked to solve issues users face every day. Graduated with distinction with a 3.67 GPA.",
               list: [
                  "Two-year, full-time diploma program",
                  "Eight week practicum to learn on the job",
                  "Learn from some of the most knowledgeable and talented people in the industry",
               ],
               href: "https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/"
            },
            {
               title: "Scrimba",
               subtitle: "Certificate, The Frontend Developer Career Path",
               time: "July 2022",
               description: "The Frontend Developer Career Path is a 70-hour interactive online course covering all the nuances of modern frontend web development. It allows students to build multiple projects, including hands-off projects that challenge their problem-solving skills.",
               list: [
                  "70-hour, online certificate program",
                  "Covers HTML, CSS, JavaScript, React, design, career strategy, and much more.",
                  "Interact with other students and offer code reviews or ask for career advice",
               ],
               href: "https://scrimba.com/learn/frontend"
            }
         ],
         work: [
            {
               title: "ScopeMedia",
               subtitle: "Frontend Developer, UX / UI Designer",
               time: "Mar 2021 - May 2021, Dec 2021 - May 2022",
               description: "At ScopeMedia for an internship, I was assigned to Frontend Development and UX / UI Design role, where I was to develop a demo website for clients to showcase the company's new AI Stylist SaaS. Later that year, I was hired as a contractor in a UX / UI Design and Frontend Development role and tasked to create design systems, prototypes, recommendations, and overlook documentation for the new ScopeX website.",
               list: [
                  "Designed multiple low and high fidelity prototypes, as well as design systems",
                  "Managed multiple new interns of UX / UI Designers and Frontend Developers",
                  "Worked under an Agile environment, using Jira",
               ]
            }
         ],
         certificate: [
            {
               title: "The Frontend Developer Career Path",
               img: "/img/experience/scrimba.webp",
               href: "https://scrimba.com/certificate/ud29B7c6/gfrontend"
            },
            {
               title: "Node.js API Masterclass with Express & MongoDB",
               img: "/img/experience/nodejs_masterclass.jpg",
               href: "https://www.udemy.com/certificate/UC-c0e64adc-c8ae-43a0-886b-ebb8aac4c380/"
            },
            {
               title: "MongoDB - The Complete Developer's Guide 2022",
               img: "/img/experience/mongodb_course.jpg",
               href: "https://www.udemy.com/certificate/UC-654be02e-f476-4a0d-843a-06956c6413f3/"
            }
         ]
      }
   )
}
