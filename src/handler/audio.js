export default class AudioHandler {
  constructor(audioContext) {
    this.audioContext = audioContext;
    this.audioSourceNode = null;
    this.audioRecordProcessor = null;
  }

  init(stream) {
    try {
      // 오디오 트랙 설정
      console.log("this.audioContext", this.audioContext);
      const audioTracks = stream.getAudioTracks();
      this.audioSourceNode = this.audioContext.createMediaStreamSource(
        new MediaStream(audioTracks)
      );

      // 프로세서 설정
      this.audioRecordProcessor = this.audioContext.createScriptProcessor(
        4096,
        2,
        2
      );
      this.audioRecordProcessor.bufferArray = [];

      // 오디오 프로세스 이벤트 설정
      this.audioRecordProcessor.onaudioprocess = this.handleAudioProcess;
    } catch (error) {
      console.error("오디오 초기화 실패:", error);
      throw error;
    }
  }
}
