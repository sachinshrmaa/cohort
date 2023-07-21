import { WorkshopData } from "@/types/workshop";

const workshops: WorkshopData[] = [
  {
    id: 1,
    slug: "computer-network-workshop",
    name: "Computer Network Hands On: Unraveling Networks with Packet Tracer",
    description:
      "Join our hands-on workshop, 'Computer Network Hands On,' where we'll demystify the world of computer networks using the power of Packet Tracer! 🌐🔧",
    price: 499,
    thumbnail: "/img/frontend-web-dev.png",
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
