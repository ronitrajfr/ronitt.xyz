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
      description: "An AI powered PDF summarizer",
    },
  
    {
      repo:"anonGPT",
      link: "https://github.com/ronitrajfr/anonGPT",
      description: "Fast and accurate information retrieval, no more endless searching.",
    },
    {
      repo: "Celing",
      link: "https://github.com/ronitrajfr/celing",
      description: "CLI that adds license in your project right from your terminal",
    },
    {
      repo: "Procise",
      link: "https://github.com/ronitrajfr/procise",
      description: "An AI powered hackernews comments summarizer",
    },
    {
      repo: "Clave",
      link: "https://github.com/ronitrajfr/clave",
      description: "Fun coding quiz! Test your skills and compete with friends!",
    },
    {
      repo:"askReddit",
      link: "https://x.com/ronitrajfr/status/1823619565148156384",
      description: "get result from your fav site instantly alongside google search results",
    },

   
  ];
}
