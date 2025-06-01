//Intialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
//audioElement.play();
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs= [
    {songName:"Sly Sky - Telecasted", filePath:'song/1.mp3', coverPath:"coverPath/1.png"},
    {songName:"Fireflies - The Mini Vandals", filePath:'song/2.mp3', coverPath:"coverPath/2.jpg"},
    {songName:"Seagull - Telecasted", filePath:'song/3.mp3', coverPath:"coverPath/3.jpg"},
    {songName:"Delayed Baggage - Ryan Stasik", filePath:'song/4.mp3', coverPath:"coverPath/4.jpg"},
    {songName:"Future - Anno Domini Beats", filePath:'song/5.mp3', coverPath:"coverPath/5.jpeg"},
    {songName:"Charm - Anno Domini Beats", filePath:'song/6.mp3', coverPath:"coverPath/6.jpg"},
    {songName:"Window Shopping - Jeremy Black", filePath:'song/7.mp3', coverPath:"coverPath/7.jpeg"},
];

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})
//hansdle paly pause click




masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//event listener
audioElement.addEventListener('timeupdate', () =>{
    console.log('timeUpdate');
    //update sseekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress)
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

