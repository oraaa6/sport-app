import { getRequest } from "@/request/request";
import { TableResponse } from "./table.service.types";

export async function getTable() {
  return getRequest<TableResponse>("table");
}
