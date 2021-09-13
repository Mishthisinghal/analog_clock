let hr=document.getElementById("hour");
let min=document.getElementById("minutes");
let sec=document.getElementById("seconds");

setInterval(()=>{
   let time=new Date();
   h=time.getHours();
   m=time.getMinutes();
   s=time.getSeconds();
   rotsec=6*s;
   rotmin=6*m;
   rothr=(30*h)+((1/2)*m);
   
   hr.style.transform=`rotate(${rothr}deg)`;
   min.style.transform=`rotate(${rotmin}deg)`;
   sec.style.transform=`rotate(${rotsec}deg)`;
},1000);
