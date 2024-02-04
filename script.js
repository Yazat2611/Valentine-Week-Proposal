const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const date = new Date().getDate();
const hours = new Date().getHours();
const month = new Date().getMonth();
const year = new Date().getFullYear();

let val;

if(month==0) val ="January"
else if(month==1) val = "Febuary"
else if(month==2) val = "March"
else if(month==3) val = "April"
else if(month==4) val = "May"
else if(month==5) val = "June"
else if(month==6) val = "July"
else if(monthguit==7) val = "August"
else if(month==8) val = "September"
else if(month==9) val = "October"
else if(month==10) val = "November"
else if(month==11) val = "December"


let timestring = "Good now we will meet on "+date+" "+val+" "+year;
yesBtn.addEventListener("click", () => {
  question.innerHTML = timestring;  
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

// noBtn.addEventListener("click",() =>{
//   question.innerHTML = "Schi Nahi Milna";
//   gif.src="https://media.giphy.com/media/dJYoOVAWf2QkU/giphy.gif";
// });




noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});