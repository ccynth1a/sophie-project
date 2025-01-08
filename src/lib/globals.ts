import { writable } from "svelte/store";
import type { Sale } from "./types";

export const databaseQueryData = writable<Sale[]>([]);
export const dbLoaded = writable<Boolean>(false);