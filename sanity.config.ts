import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'bltxlk9k',
  dataset: 'production',
  title: 'SHOTBYLEO',
  basePath: "/admin",
  plugins: [
    deskTool(),
  ],
  apiVersion: '2023-07-24',
  useCdn: true,
  schema: { types: schemas },
});

export default config;