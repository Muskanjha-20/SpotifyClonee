console.log("Welcome to Spotify")

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItems =Array.from(document.getElementsByClassName('songItem'));
  
let song = [
    {songName: "Warriyo - Mortals", filepath:"song/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "Apna bana le", filepath:"song/2.mp3", coverpath: "covers/remote.jpg"},
    {songName: "Tu maan meri jaan", filepath:"song/3.mp3", coverpath: "covers/king.jpg"},
    {songName: "Kaise hua", filepath:"song/4.mp3", coverpath: "covers/ksingh.jpg"},
    {songName: "Leja Mujhe sath Tere", filepath:"song/5.mp3", coverpath: "covers/armaan.jpg"},
    {songName: "Nai lagda jee", filepath:"song/6.mp3", coverpath: "covers/nhi.jpg"},
    {songName: "Pavitra Rishta", filepath:"song/7.mp3", coverpath: "covers/pv2.jpg"},
    {songName: "Tu aake dekhle", filepath:"song/8.mp3", coverpath: "covers/king2.jpg"},
    {songName: "pasuri", filepath:"song/9.mp3", coverpath: "covers/ps.jpg"},
    {songName: "Senorita", filepath:"song/10.mp3", coverpath: "covers/10.jpg"}

]

songItems.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src = song[i].coverpath;
    
})
//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
       
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // update Seekbar
    progress  = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause-circle")
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex-1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

