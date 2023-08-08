import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {visionTool} from '@sanity/vision'
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'bltxlk9k',
  dataset: 'production',
  title: 'SHOTBYLEO',
  basePath: "/admin",
  plugins: [
    deskTool(),
    visionTool({
      defaultApiVersion: '2023-07-24',
      defaultDataset: 'production',
    }),
  ],
  apiVersion: '2023-07-24',
  useCdn: false,
  schema: { types: schemas },
});

export default config;