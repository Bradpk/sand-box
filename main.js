// import * as Tone from 'tone'

const generateIntervalButton = document.getElementById('generateIntervalButton');
const generateScaleButton = document.getElementById('generateScaleButton');
let previousNumber = -1;
//--------------------------------------------------------------------------------
function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomInterval() {
    const min = 0;
    const max = 11;
    let randomInterval;

    do {
        randomInterval = getRandomInterval(min, max);
    } while (randomInterval === previousNumber);

    previousNumber = randomInterval;
    document.getElementById('resultInterval').textContent = `${randomInterval}`;

    Tone.start().then(() => {
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();

        switch (randomInterval) {
            case 0:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("C#4", "4n", now + 0.5);
                break;
            case 1:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.5);
                break;
            case 2:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D#4", "4n", now + 0.5);
                break;
            case 3:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("E4", "4n", now + 0.5);
                break;
            case 4:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("F4", "4n", now + 0.5);
                break;
            case 5:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("F#4", "4n", now + 0.5);
                break;
            case 6:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("G4", "4n", now + 0.5);
                break;
            case 7:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("G#4", "4n", now + 0.5);
                break;
            case 8:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("A4", "4n", now + 0.5);
                break;
            case 9:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("A#4", "4n", now + 0.5);
                break;
            case 10:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("B4", "4n", now + 0.5);
                break;
            case 11:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("C5", "4n", now + 0.5);
                break;

            default:

                break;
        }
    });
}
//-----------------------------------------
function getRandomScale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomScale() {
    const min = 0;
    const max = 6;
    let randomScale;

    do {
        randomScale = getRandomScale(min, max);
    } while (randomScale === previousNumber);

    previousNumber = randomScale;
    document.getElementById('resultScale').textContent = `${randomScale}`;

    Tone.start().then(() => {
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();

        switch (randomScale) {
            case 0:
            case 0:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.5);
                synth.triggerAttackRelease("E4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("A4", "4n", now + 2.5);
                synth.triggerAttackRelease("B4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 1:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.5);
                synth.triggerAttackRelease("D#4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("A4", "4n", now + 2.5);
                synth.triggerAttackRelease("A#4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 2:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("C#4", "4n", now + 0.5);
                synth.triggerAttackRelease("D#4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("G#4", "4n", now + 2.5);
                synth.triggerAttackRelease("A#4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 3:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.5);
                synth.triggerAttackRelease("E4", "4n", now + 1);
                synth.triggerAttackRelease("F#4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("A4", "4n", now + 2.5);
                synth.triggerAttackRelease("B4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 4:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.5);
                synth.triggerAttackRelease("E4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("A4", "4n", now + 2.5);
                synth.triggerAttackRelease("A#4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 5:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("D4", "4n", now + 0.5);
                synth.triggerAttackRelease("D#4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("G4", "4n", now + 2);
                synth.triggerAttackRelease("G#4", "4n", now + 2.5);
                synth.triggerAttackRelease("A#4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;
            case 6:
                synth.triggerAttackRelease("C4", "4n", now);
                synth.triggerAttackRelease("C#4", "4n", now + 0.5);
                synth.triggerAttackRelease("D#4", "4n", now + 1);
                synth.triggerAttackRelease("F4", "4n", now + 1.5);
                synth.triggerAttackRelease("F#4", "4n", now + 2);
                synth.triggerAttackRelease("G#4", "4n", now + 2.5);
                synth.triggerAttackRelease("A#4", "4n", now + 3);
                synth.triggerAttackRelease("C5", "4n", now + 3.5);
                break;

            default:

                break;
        }
    });
}
//--------------------
generateIntervalButton.addEventListener('click', generateRandomInterval);
generateScaleButton.addEventListener('click', generateRandomScale);