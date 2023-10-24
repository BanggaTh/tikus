const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.score');
const hit = document.querySelector('#hit');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah){
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya){
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus(){
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300 , 1000);
    tRandom.classList.add('muncul');

    setTimeout(() =>{
        tRandom.classList.remove('muncul');
        if(!selesai){
            munculkanTikus();
        }
    }, wRandom);
}


function mulai(){
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanTikus();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul(){
    this.style.transition = "transition TOP 0s";
    skor++;
    this.parentNode.classList.remove('muncul');
    hit.play();
    papanSkor.textContent = skor;
}

tikus.forEach(t => {
    t.addEventListener('click' , pukul);
});