const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector('.bottom');

let slide = 1;

console.log(images.length);

const nextSlide = ()=>{
    
    slider.style.transform = `translateX(-${800 * slide}px)`;
    slide++;
}

const prevSlide = ()=>{
  
  slider.style.transform = `translateX(-${800 * (slide-2)}px)`;
  slide--;
}

const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slide=1;
}

const getLastSlide = ()=>{
  slider.style.transform = `translateX(${(images.length-1)*800})`;
  slide = images.length;
}

right.addEventListener("click", () => {
  if (slide < images.length) {
    nextSlide();
  }else{
    getFirstSlide();
  }
});

left.addEventListener('click',()=>{
  console.log("hello")
  if(slide>1){
    prevSlide();
  }else{
    getLastSlide();
  }
  
})

for(let i=0;i<images.length;i++){
  const div = document.createElement("div");
  div.classList.add("button");
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");


buttons.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
       slider.style.transform = `translateX(-${i*800}px)`;
       
    })
})