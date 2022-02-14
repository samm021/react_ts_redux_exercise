import { Pack } from "./Pack";

export interface PackState {
  data: Pack[];
  loading: boolean;
  error: string | null;
}