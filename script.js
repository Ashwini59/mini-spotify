console.log("Welcome To Spotify");
//initialize the Variables
let songIndex = 0;
let audioElement = new Audio('song.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "I Love You Baby",filepath: "songs/song.mp3",coverPath: "cover.jpg"},
    {songName: "A Tousand Year",filepath: "songs/song1.mp3",coverPath: "cover1.jfif"},
    {songName: "Unholy(feat.Kis Petras)",filepath: "songs/song2.mp3",coverPath: "cover2.jpg"},
    {songName: "Baby Calm Down",filepath: "songs/song3.mp3",coverPath: "cover3.jpg"},
    {songName: "People(Libianca)",filepath: "songs/song4.mp3",coverPath: "cover4.jpg"},
    {songName: "Senorita(Shawn Mendes)",filepath: "songs/song5.mp3",coverPath: "cover5.jpg"},
]

songItems.forEach((Element,i)=>{
   // console.log(Element,i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();
//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  //  console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100 ;
})

const makeAllPlays =()=>{
    //e.target.classList.add('fa-circle-play');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex= 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex= 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})