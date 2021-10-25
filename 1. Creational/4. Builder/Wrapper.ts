import { IPacking } from "./IPacking";

export class Wrapper implements IPacking {
  public pack(): string {
    return "Wrapper";
  }
}
