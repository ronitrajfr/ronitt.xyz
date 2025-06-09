import { z } from "zod";

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;


export async function getProjects(): Promise<Project[]> {
  return [
    {
      repo: "Ayoni",
      link: "https://github.com/ronitrajfr/ayoni",
      description: "Open-source web analytics built for modern websites — simple, fast, and easy to use.",
    },
    {
      repo: "Travelshare",
      link: "https://github.com/ronitrajfr/travelshare",
      description: "A place where you can share unexplored places with stunning photos and precise locations.",
    },
    {
      repo: "Postbox",
      link: "https://github.com/ronitrajfr/postbox",
      description: "An open-source tool designed specifically for testing APIs.",
    },
       {
      repo: "http-server",
      link: "https://github.com/ronitrajfr/http-server",
      description: "HTTP server implementation handles basic HTTP requests. ",
    },
        {
      repo: "Rtop",
      link: "https://github.com/ronitrajfr/rtop",
      description: "rtop is alternative to htop(system monitor made in C)",
    },
       
       {
      repo: "Ronis",
      link: "https://github.com/ronitrajfr/ronis",
      description: "Implementation of redis-like server. (todo: adding rdb persistence)",
    },
    {
      repo: "Celing",
      link: "https://github.com/ronitrajfr/celing",
      description: "CLI that adds license in your project right from your terminal.",
    },
  
  ];
}
