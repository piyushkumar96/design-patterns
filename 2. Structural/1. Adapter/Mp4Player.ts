import { IAdvancedMediaPlayer } from "./IAdvancedMediaPlayer";

export class Mp4Player implements IAdvancedMediaPlayer {
  public playVlc(filename: string) {
    console.log("Not implemented");
  }

  public playMp4(filename: string) {
    console.log("Playing mp4 filename: ", filename);
  }
}
