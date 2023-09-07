console.log("sudha")

let index=0;
let audioelement= new Audio('https://pagalsong.in/uploads/systemuploads/mp3/Krishna%20Cottage/Suna%20Suna%20-%20Krishna%20Cottage%20128%20Kbps.mp3');
let bar= document.getElementById('myProgressBar');
let play= document.getElementById('play');
let gif=document.getElementById('gif');
let master=document.getElementById('master');
let songs=[
    {songName: "Aa Chal Ke Tujhe", filepath:"https://pagalsong.in/uploads/systemuploads/mp3/Door%20Gagan%20Ki%20Chhaon%20Mein/Aa%20Chal%20Ke%20Tujhe%20-%20Door%20Gagan%20Ki%20Chhaon%20Mein.mp3", coverpath:"https://tse3.mm.bing.net/th?id=OIP.ah9MGut2AyM_sZmLCFsXXAAAAA&pid=Api&P=0&h=180"},
    {songName: "Suna Suna", filepath:"https://pagalsong.in/uploads/systemuploads/mp3/Krishna%20Cottage/Suna%20Suna%20-%20Krishna%20Cottage%20128%20Kbps.mp3"},
    {songName: "Aashiyan", filepath:"https://pagalsong.in/uploads/systemuploads/mp3/Barfi/Aashiyan%20-%20Barfi%20128%20Kbps.mp3", coverpath:"https://3.bp.blogspot.com/-ze4m92KU9_8/VPRN9DQUwHI/AAAAAAAAAjI/r5VopD0yBB4/s1600/Barfi-2.jpg"},
    {songName: "Kaise Mujhe", filepath:"https://pagalsong.in/uploads/systemuploads/mp3/Ghajini/Kaise%20Mujhe%20128%20Kbps.mp3", coverpath:"http://imge.kugou.com/stdmusic/20160908/20160908230141232519.jpg"},
    {songName: "Tera Sath Hae To", filepath:"https://pagalsong.in/uploads/systemuploads/mp3/Pyaasa%20Sawan/Tera%20Saath%20Hai%20To%20(Female)%20-%20Pyaasa%20Sawan%20128%20Kbps.mp3", coverpath:"https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_358785512.jpg"},
    {songName: "Tere Hawale", filepath:"https://pagalworld.com.sc/files/download/id/11031", coverpath:"https://pagalworld.com.sc/datadbs/thumb/sft23/11031_4.jpg"},
    {songName: "Tujhme Rab Dikhta Hae", filepath:"https://pagalsong.in/uploads/systemuploads/mp3/Rab%20Ne%20Bana%20Di%20Jodi/Tujh%20Mein%20Rab%20Dikhta%20Hai%20-%20Rab%20Ne%20Bana%20Di%20Jodi%20128%20Kbps.mp3", coverpath:"https://tse3.mm.bing.net/th?id=OIP.js6MYijSY2Pw_at13hifiwAAAA&pid=Api&P=0&h=180"},
]
const fun = ()=>{
    if(audioelement.paused || audioelement.currentTime <= 0)
    {
        audioelement.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
        audioelement.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
        gif.style.opacity= 0;
    }
}
play.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime <= 0)
    {
        audioelement.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
        audioelement.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
        gif.style.opacity= 0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    bar.value = progress ;
})
bar.addEventListener('change',()=>{
    audioelement.currentTime = (bar.value * audioelement.duration)/100 ;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        index= parseInt(e.target.id);
        audioelement.src = songs[index].filepath;
        audioelement.currentTime = 0;
        audioelement.play();
        fun();
        master.innerText = songs[index].songName;
    })
})
document.getElementById('nxt').addEventListener('click',()=>
{         
   if(index==6)
   {
    index=0;
   }
   else{
    index+=1;
   }
   audioelement.src = songs[index].filepath;
        audioelement.currentTime = 0;
        audioelement.play();
        fun();
        master.innerText = songs[index].songName;
})
document.getElementById('prev').addEventListener('click',()=>
{
    if(index==0)
   {
    index=6;
   }
   else{
    index-=1;
   }
   audioelement.src = songs[index].filepath;
        audioelement.currentTime = 0;
        audioelement.play();
        fun();
        master.innerText = songs[index].songName;
})