//Intialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
//audioElement.play();
let songs= [
    {songName:"SlySkyTelecasted", filePath:'song/1.mp3', coverPath:"coverPath/1.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/2.mp3', coverPath:"coverPath/2.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/3.mp3', coverPath:"coverPath/3.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/4.mp3', coverPath:"coverPath/4.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/5.mp3', coverPath:"coverPath/5.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/6.mp3', coverPath:"coverPath/6.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/7.mp3', coverPath:"coverPath/7.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/8.mp3', coverPath:"coverPath/8.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/9.mp3', coverPath:"coverPath/9.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/10.mp3', coverPath:"coverPath/10.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/11.mp3', coverPath:"coverPath/11.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/12.mp3', coverPath:"coverPath/12.jpg"},
    {songName:"Salam-e-ishq", filePath:'song/13.mp3', coverPath:"coverPath/13.jpg"},
];
//hansdle paly pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//event listener
document.addEventListener('timeupdate', () =>{
    console.log('timeUpdate');
    //update sseekbar
});

