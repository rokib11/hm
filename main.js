const btn=document.querySelector(".btn");
const ShowNow=document.querySelector(".ShowNow");
const Lovestory=document.querySelector(".Lovestory")
const hello=document.querySelector(".section h2")
ShowNow.onclick=()=>{
    Lovestory.classList.add("activeInfo");
    showoption(0);
}
let que=0;
btn.onclick=()=>{
    if(que <Question.length - 1){
        que++;
        showoption(que);
   
    }else{
        
        
    }
}
function showoption(index){
const text=document.querySelector(".text");
let que_tag = "<span>" + Question[index].numb+ ". " +Question[index].question+ " </span>"; 
text.innerHTML=que_tag;
const option=document.querySelector(".option")
let QueAns="<span>" + Question[index].answer + "</span>"
option.innerHTML=QueAns
}
