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
      repo: "Preve",
      link: "https://github.com/ronitrajfr/preve",
      description: "Drop your PDFs into Preve for summaries, key points, details, and questions.",
    },
  
    {
      repo:"anonGPT",
      link: "https://github.com/ronitrajfr/anonGPT",
      description: "Fast and accurate information retrieval, no more endless searching.",
    },
    {
      repo: "Postbox",
      link: "https://github.com/ronitrajfr/postbox",
      description: "An open-source tool designed specifically for testing APIs.",
    },
    {
      repo: "Clave",
      link: "https://github.com/ronitrajfr/clave",
      description: "Fun coding quiz! Test your skills and compete with friends!",
    },
    {
      repo: "Celing",
      link: "https://github.com/ronitrajfr/celing",
      description: "CLI that adds license in your project right from your terminal.",
    },

    {
      repo: "Procise",
      link: "https://github.com/ronitrajfr/procise",
      description: "An AI powered hackernews comments summarizer.",
    },
   
    {
      repo:"askReddit",
      link: "https://x.com/ronitrajfr/status/1823619565148156384",
      description: "get result from your fav site instantly alongside google search results.",
    },
     
    {
      repo:"Apple",
      link: "https://github.com/ronitrajfr/apple",
      description: "Animated Apple website UI clone with responsive layout and dynamic features.",
    },
    {
      repo:"Robust",
      link: "https://github.com/ronitrajfr/robust",
      description: "Game coins transaction: Send or receive coins from other users."
    },
    {
      repo:"CivicNet",
      link: "https://github.com/ronitrajfr/civicnet",
      description: "This is a hackathon project. Report issues, get solutions – swiftly."
    },
    {
      repo:"Narrify",
      link: "https://github.com/ronitrajfr/narrify",
      description: "Blogging site made using hono, cloudflare workers and vite."
    },

  ];
}
