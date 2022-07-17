import { CREATE_ENTRY } from "./types";

export function createEntry(entry){
  return {
    type: CREATE_ENTRY,
    payload: entry
  }
}