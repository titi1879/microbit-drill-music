//% color=#1e1e2f icon="\uf001" block="Drill Music"
namespace drillmusic {

    /**
     * Play a dark drill-style melody inspired by Crazy Story
     */
    //% block="play Crazy Story melody"
    export function playCrazyStoryMelody() {
        // Set tempo and volume
        music.setVolume(255)
        music.setTempo(110)

        // Melody notes (E4, B3, D4, A3 style)
        let melody = [
            music.tonePlayable(330, music.beat(BeatFraction.HALF)), // E4
            music.tonePlayable(247, music.beat(BeatFraction.HALF)), // B3
            music.tonePlayable(330, music.beat(BeatFraction.HALF)), // E4
            music.tonePlayable(247, music.beat(BeatFraction.HALF)), // B3

            music.tonePlayable(294, music.beat(BeatFraction.HALF)), // D4
            music.tonePlayable(247, music.beat(BeatFraction.HALF)), // B3
            music.tonePlayable(294, music.beat(BeatFraction.HALF)), // D4
            music.tonePlayable(220, music.beat(BeatFraction.WHOLE)), // A3

            music.tonePlayable(330, music.beat(BeatFraction.HALF)), // E4
            music.tonePlayable(247, music.beat(BeatFraction.HALF)), // B3
            music.tonePlayable(294, music.beat(BeatFraction.HALF)), // D4
            music.tonePlayable(220, music.beat(BeatFraction.WHOLE))  // A3
        ]

        // Play each note until done
        for (let n of melody) {
            music.play(n, music.PlaybackMode.UntilDone)
        }
    }

    /**
     * Play a classic 808-style drop
     */
    //% block="play 808 drop"
    export function drop808() {
        music.play(music.tonePlayable(180, music.beat(BeatFraction.QUARTER)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(120, music.beat(BeatFraction.HALF)), music.PlaybackMode.UntilDone)
    }

    /**
     * Play a looped drill melody continuously
     */
    //% block="loop Crazy Story melody"
    export function loopCrazyStoryMelody() {
        basic.forever(function () {
            playCrazyStoryMelody()
            basic.pause(200)
        })
    }
}
