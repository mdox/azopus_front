import { PROJECTS_ENDPOINT } from "./constants";

export async function GetProjects() {
  const response = await fetch(PROJECTS_ENDPOINT);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return await response.json();
}
