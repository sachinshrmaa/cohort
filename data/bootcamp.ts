import { BootcampData } from "@/types/bootcamp";

const bootcamps: BootcampData[] = [
  {
    id: 1,
    slug: "full",
    name: "Full Stack Web Development",
    description: "Complete 12 weeks full stack web development bootcamp.🌐🔧",
    price: 4999,
    thumbnail: "/img/Open-Source-Workshop.jpg",
    content: {
      body: "this is a body",
      modules: [
        {
          name: "HTML",
          content: "introduction to html",
        },
        {
          name: "CSS",
          content: "introduction to css",
        },
      ],
    },
    detail: {
      start: "01/09/2023",
      end: "01/09/2023",
      duration: "12 weeks",
      timing: "9:00 pm IST",
      size: 50,
    },
  },
];

export default bootcamps;
