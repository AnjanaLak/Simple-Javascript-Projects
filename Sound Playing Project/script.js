const sounds = ["Ain't Your Mama","Grass Ain't Greener",
                "If It Ain't Love",
                "Messin' Around", "Moving Mountains"];


sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {

        stopSongs();

        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause();
        song.currentTime = 0;
    })
}