//% color=#1e1e2f icon="\uf001" block="Drill Music"
namespace drillmusic {

    //% block="play Crazy Story melody"
    export function playCrazyStoryMelody() {
        music.setVolume(255)
        music.setTempo(110)

        let melody = [
            music.tonePlayable(330, music.beat(BeatFraction.HALF)),
            music.tonePlayable(247, music.beat(BeatFraction.HALF)),
            music.tonePlayable(330, music.beat(BeatFraction.HALF)),
            music.tonePlayable(247, music.beat(BeatFraction.HALF)),
            music.tonePlayable(294, music.beat(BeatFraction.HALF)),
            music.tonePlayable(247, music.beat(BeatFraction.HALF)),
            music.tonePlayable(294, music.beat(BeatFraction.HALF)),
            music.tonePlayable(220, music.beat(BeatFraction.WHOLE))
        ]

        for (let n of melody) {
            music.play(n, music.PlaybackMode.UntilDone)
        }
    }

    //% block="play 808 drop"
    export function drop808() {
        music.play(music.tonePlayable(180, music.beat(BeatFraction.QUARTER)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(120, music.beat(BeatFraction.HALF)), music.PlaybackMode.UntilDone)
    }

    //% block="loop Crazy Story melody"
    export function loopCrazyStoryMelody() {
        basic.forever(function () {
            playCrazyStoryMelody()
            basic.pause(200)
        })
    }
}
