//% color=#1e1e2f icon="\uf001" block="Drill Music"
namespace drillmusic {

    //% block="play drill tone %freq Hz for %beats beats"
    //% freq.min=60 freq.max=1000
    //% beats.shadow=music_beats
    export function playDrillTone(freq: number, beats: number) {
        music.play(
            music.tonePlayable(freq, music.beat(beats)),
            music.PlaybackMode.UntilDone
        )
    }
}
