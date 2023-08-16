import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: string;
  name: string;
  subtitle: string;
  stack: string[];
  slug: string;
  imagehero: string;
  url: string;
  githuburl: string;
  content: PortableTextBlock[];
};