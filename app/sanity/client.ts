import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "8l9pnx1y",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});