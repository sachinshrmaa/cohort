import { WorkshopData } from "@/types/workshop";

const workshops: WorkshopData[] = [
  {
    id: 1,
    slug: "contributing-to-opensourse",
    name: "Contributing to Open Source",
    description:
      "Join our hands-on free workshop, 'Contributing to Open Source' where we'll understand the basics of version control: Learn the basics of Git and GitHub and contribute to an open-source project.🌐🔧",
    price: 0,
    registration_link: "https://thebasicsclass.sachinsblog.in",
    status: "upcoming",
    thumbnail: "/img/Open-Source-Workshop.jpg",
    content: "this is a content",
    detail: {
      start: "04/09/2023",
      end: "08/09/2023",
      duration: "1 week (3 sessions)",
      timing: "9:00pm - 11:00pm IST",
      size: 20,
    },
  },
  {
    id: 2,
    slug: "basics-of-ccna",
    name: "Beginner Friendly Hands-On CCNA Workshop",
    description:
      "Dive into the world of networking with our dynamic online live cohort, where you'll learn CCNA through practical, real-world scenarios. ",
    price: 299,
    registration_link: "https://forms.gle/uQVyszAyZ6FPhNXm6",
    status: "active",
    thumbnail: "/img/ccna.png",
    content:
      "<div class='content'><h4>Day 1: Foundations of Networking and Device Setup</h4><ul><li>Set up devices with basic configurations, interfaces, and VLANs.</li><li>Learn about OSI Model, TCP/IP, and IP addressing/subnetting.</li></ul><h4>Day 2: Routing, Switching, and Network Services</h4><ul><li>Explore static routing and basic switch setups.</li><li>Discover DHCP and NAT functionalities.</li></ul><h4>Day 3: Troubleshooting and Practical Application</h4><ul><li>Master CLI diagnostics and solve connectivity issues.</li><li>Apply knowledge to real-world scenarios.</li></ul></div>",
    detail: {
      start: "04/09/2023",
      end: "08/09/2023",
      duration: "1 week (3 sessions)",
      timing: "9:00pm - 11:00pm IST",
      size: 20,
    },
  },
];

export default workshops;
