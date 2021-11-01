import { IMediaPlayer } from "./IMediaPlayer";
import { IAdvancedMediaPlayer } from "./IAdvancedMediaPlayer";
import { VlcPlayer } from "./VlcPlayer";
import { Mp4Player } from "./Mp4Player";

export class MediaAdapter implements IMediaPlayer {
  private advanceMusicPlayer: IAdvancedMediaPlayer;

  constructor(audioType: string) {
    if (audioType.toLowerCase() === "vlc") {
      this.advanceMusicPlayer = new VlcPlayer();
    } else if (audioType.toLowerCase() === "mp4") {
      this.advanceMusicPlayer = new Mp4Player();
    }
  }

  public play(audioType: string, fileName: string) {
    if (audioType.toLowerCase() === "vlc") {
      this.advanceMusicPlayer.playVlc(fileName);
    } else if (audioType.toLowerCase() === "mp4") {
      this.advanceMusicPlayer.playMp4(fileName);
    }
  }
}
