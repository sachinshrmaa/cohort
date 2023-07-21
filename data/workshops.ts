import { WorkshopData } from "@/types/workshop";

const workshops: WorkshopData[] = [
  {
    id: 1,
    slug: "Contributing-to-Open-Source",
    name: "Contributing to Open Source",
    description:
      "Join our hands-on workshop, 'Computer Network Hands On,' where we'll demystify the world of computer networks using the power of Packet Tracer! 🌐🔧",
    price: 0,
    thumbnail: "/img/Open-Source-Workshop.jpg",
  },
  {
    id: 2,
    slug: "frontend-web-dev",
    name: "ReactJS for Beginners: A Hands-On Introduction to Frontend Development",
    description:
      "Learn to build modern, interactive web applications with ReactJS and Bootstrap in this beginner-friendly masterclass.",
    price: 499,
    thumbnail: "/img/frontend-web-dev.png",
  },
];

export default workshops;
