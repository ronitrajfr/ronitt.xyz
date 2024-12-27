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
      repo: "Travelshare",
      link: "https://github.com/ronitrajfr/travelshare",
      description: "A place where you can share unexplored places with stunning photos and precise locations.",
    },
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
      repo: "Celing",
      link: "https://github.com/ronitrajfr/celing",
      description: "CLI that adds license in your project right from your terminal.",
    },

    {
      repo: "Procise",
      link: "https://github.com/ronitrajfr/procise",
      description: "An AI powered hackernews comments summarizer.",
    },

  
  ];
}
