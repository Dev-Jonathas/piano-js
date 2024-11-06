const pianoKeys = document.querySelectorAll('.piano-keys .key');
const VolumeSlider = document.querySelector('.volume-slider input');
const keyCheck = document.querySelector('.keys-check input');


let mapedKeys = [];
let audio =  new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`.piano-keys .key[data-key="${key}"]`)
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    },150);
};



pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener('click', () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});


document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;

};

const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

VolumeSlider.addEventListener("input", handleVolume);

keyCheck.addEventListener("click", showHideKeys);