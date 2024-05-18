import { getRequest } from "@/request/request";
import { TeamsResponse } from "./teams.service.types";

export async function getTeams() {
  return getRequest<TeamsResponse>("teams");
}
