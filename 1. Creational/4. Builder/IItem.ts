import { IPacking } from "./IPacking";

export interface IItem {
  name(): string;
  price(): number;
  packing(): IPacking;
}
