import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { Stack } from "@/types/Stack";
import { Timeline } from "@/types/Timeline";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(order asc){
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "imagemain": imagemain.asset->url,
    url,
    content,
    subtitle,
    stack,
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    subtitle,
    stack,
    "slug": slug.current,
    "imagemain": imagemain.asset->url,
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

export async function getTimeline(): Promise<Timeline[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "timeline"] | order(order asc) {
    _id,
    _createdAt,
    job_title,
    company_name,
    company_location,
    "image": image.asset->url,
    start_date,
    end_date,
    description,
    button_text,
    button_url,
    order
    }`
  )
}
