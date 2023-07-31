import { PortableTextBlock } from 'sanity';

export type Timeline = {
  _id: string;
  _createdAt: string;
  job_title: string;
  company_name: string;
  company_location: string;
  image: string;
  start_date: string;
  end_date: string;
  description: PortableTextBlock[];
  button_text: string;
  button_url: string;
  order: number;
};