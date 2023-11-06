import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from '@sanity/vision'
import { schemaTypes } from "./schemas";
import { config } from "./sanity";

export default defineConfig({
  ...config,
  name: "apple-redesign",
  title: "Apple Redesign",
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
});

// name: "apple-redesign",
//   title: "Apple Redesign",
//   projectId: "yan6ifbo",
//   dataset: "production",
//   basePath: "/studio",