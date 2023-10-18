import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "apple-redesign",
  title: "Apple Redesign",
  projectId: "yan6ifbo",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});