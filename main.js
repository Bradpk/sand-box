// import * as Tone from 'tone'

const generateIntervalButton = document.getElementById('generateIntervalButton');
const generateScaleButton = document.getElementById('generateScaleButton');
const numberButtonsContainer = document.getElementById('numberButtons');


function bindNumberButtonEvents() {
    const numberButtons = document.querySelectorAll('.number-button');
    
    numberButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const resultInterval = parseInt(document.getElementById('resultInterval').textContent);
            const resultScale = parseInt(document.getElementById('resultScale').textContent);
            
            if (!isNaN(resultInterval) && index === resultInterval) {
                
                button.classList.add('correct');
            } else if (!isNaN(resultScale) && index === resultScale) {
                
                button.classList.add('correct');
            } else {
              
                button.classList.add('incorrect');
            }
        });
    });
}
//-------------
function bindNumberButtonEvents() {
    const numberButtons = document.querySelectorAll('.number-button');

    numberButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const resultInterval = parseInt(document.getElementById('resultInterval').textContent);
            const resultScale = parseInt(document.getElementById('resultScale').textContent);

            if (!isNaN(resultInterval) && index === resultInterval) {
               
                button.classList.add('correct');
            } else if (!isNaN(resultScale) && index === resultScale) {
               
                button.classList.add('correct');
            } else {
         
                button.classList.add('incorrect');
            }

            setTimeout(() => {
                button.classList.remove('correct', 'incorrect');
            }, 1000);
        });
    });
}
//----------

//----------------------------------------------------------------
function generateNumberButtons() {
    const intervalLabels = [
        "Minor 2nd", "Major 2nd", "Minor 3rd", "Major 3rd",
        "Perfect 4th", "Dim 5th", "Perfect 5th", "Minor 6th",
        "Major 6th", "Minor 7th", "Major 7th", "Octave"
    ];

    for (let i = 0; i <= 11; i++) {
        const button = document.createElement('button');
        button.textContent = intervalLabels[i];
        button.classList.add('number-button'); 
        numberButtonsContainer.appendChild(button);
    }
}

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

generateNumberButtons();
bindNumberButtonEvents();
generateIntervalButton.addEventListener('click', generateRandomInterval);
generateScaleButton.addEventListener('click', generateRandomScale);

