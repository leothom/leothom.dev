import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { Stack } from "@/types/Stack";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(order asc){
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    githuburl,
    content
    }`,
    { slug }
  )

}

export async function getPages(): Promise<Page[]>{
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"] | order(order asc){
      _id,
      _createdAt,
      title,
      "slug": slug.current
      }`
  );
}

export async function getPage(slug: string): Promise<Page>{
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
      }`,
      { slug }
  );
}

export async function getStack(): Promise<Stack[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "stack"] | order(order asc){
    _id,
    _createdAt,
    name,
    "image": image.asset->url
    }`
  )
}