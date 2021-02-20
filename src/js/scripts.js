const tesminonialElement = document.getElementById("testimonial-text")
const sliderControl = document.getElementById("slider")
const sliderImg = document.getElementById("slider-img")
const template = document.getElementById('template').content;

const changeSlider = type =>{
   tesminonialElement.innerHTML = ''
   
   template.querySelector('.testimonial__quote').textContent = persons[type].testimonial;
    
   const author = template.querySelector('.testimonial__author');
   const name = template.querySelector('.testimonial__name');

   name.textContent = persons[type].name;
   author.textContent = persons[type].profession;

   author.insertAdjacentElement('afterbegin', name);

   const node = document.importNode(template, true);

   tesminonialElement.appendChild(node);
  
   sliderImg.src= `../assets/img/${persons[type].img}`
   sliderImg.alt= `${persons[type].name} profile photo`
}

sliderControl.addEventListener("click", e =>{
   e.target.dataset.type == 0
   ? changeSlider(0) 
   : e.target.dataset.type == 1 
   && changeSlider(1)
})

document.addEventListener("load", changeSlider(0))
