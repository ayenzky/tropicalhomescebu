import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  projectId: "1nd8mw6f",
  dataset: "production",
  plugins: [structureTool()],
  schema,
});