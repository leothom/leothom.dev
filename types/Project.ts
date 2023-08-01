import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: string;
  name: string;
  subtitle: string;
  slug: string;
  image: string;
  url: string;
  githuburl: string;
  content: PortableTextBlock[];
};