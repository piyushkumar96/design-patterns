import { IMediaPlayer } from "./IMediaPlayer";
import { MediaAdapter } from "./MediaAdapter";

export class AudioPlayer implements IMediaPlayer {
  private mediaAdapter: MediaAdapter;
  public play(audioType: string, fileName: string) {
    //inbuilt support to play mp3 music files
    if (audioType.toLowerCase() === "mp3") {
      console.log("Playing mp3 filename: ", fileName);
    }
    //mediaAdapter is providing support to play other file formats
    else if (
      audioType.toLowerCase() === "vlc" ||
      audioType.toLowerCase() === "mp4"
    ) {
      this.mediaAdapter = new MediaAdapter(audioType);
      this.mediaAdapter.play(audioType, fileName);
    } else {
      console.log("Invalid media: ", audioType, " format not supported.");
    }
  }
}
