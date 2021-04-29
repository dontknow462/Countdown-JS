const mins= document.querySelector(".mins")
const secs= document.querySelector(".secs")
const cycle= document.querySelector(".cycle")

const start= document.querySelector(".start")
const stop= document.querySelector(".stop")
const reset= document.querySelector(".reset")


let startTimer;
start.addEventListener("click",()=>{
 if(startTimer===undefined){
    startTimer=setInterval(st,1000)
 }
 else {
    alert("Timer is already running");
}

})

const st=()=>{
    if(secs.innerText !=0){
      
        secs.innerText--
    }
    else if(mins.innerText !=0 && secs.innerHTML==0){
       secs.innerText=59
        mins.innerText--
    }
    if(mins.innerText==0 && secs.innerText==0){
        cycle.innerText++
        mins.innerText=25
        secs.innerText=0
    }
  
}

reset.addEventListener("click",()=>{
    secs.innerText="00"
    mins.innerText=25
   cycle.innerText=0
    stopInterval()
    startTimer = undefined;
})
function stopInterval(){
    clearInterval(startTimer)
}
stop.addEventListener("click", ()=>{
    clearInterval(startTimer)
    startTimer=undefined
})