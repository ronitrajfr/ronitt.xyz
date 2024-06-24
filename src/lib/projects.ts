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
      repo: "ronitt.xyz",
      link: "https://github.com/ronitrajfr/ronitt.xyz",
      description: "personal site built with Astro",
    },
    {
      repo: "Procise",
      link: "https://github.com/ronitrajfr/procise",
      description: "An AI powered hackernews comments summarizer",
    },
   
  ];
}
