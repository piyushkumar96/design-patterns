import { IAdvancedMediaPlayer } from "./IAdvancedMediaPlayer";

export class VlcPlayer implements IAdvancedMediaPlayer {
  public playVlc(filename: string) {
    console.log("Playing vlc filename: ", filename);
  }

  public playMp4(filename: string) {
    console.log("Not implemented");
  }
}
