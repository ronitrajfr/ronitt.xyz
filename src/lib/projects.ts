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
      description: "web analytics built for modern websites.",
    },
    {
      repo: "rsh",
      link: "https://github.com/ronitrajfr/rsh",
      description: "a simple shell made in C from scratch",
    },
    {
      repo: "dns-server",
      link: "https://github.com/ronitrajfr/dns-server",
      description: "dns server made in golang from scratch",
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
  
  ];
}
