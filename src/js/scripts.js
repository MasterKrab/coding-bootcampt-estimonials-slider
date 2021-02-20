const tesminonialElement = document.getElementById("testimonial-text")
const sliderControl = document.getElementById("slider")
const sliderImgContainer = document.getElementById("slider-img")

const changeSlider = type =>{
   tesminonialElement.innerHTML = `
   <blockquote class="testimonial__quote">“${persons[type].testimonial}”</blockquote>
        <p class="testimonial__author">
          <cite class="testimonial__name">${persons[type].name}</cite> ${persons[type].profession}
        </p>
   `
   sliderImgContainer.innerHTML = `<img class="slider__image" src="assets/img/${persons[type].img}" alt="${persons[type].name} profile photo">`
}

sliderControl.addEventListener("click", e =>{
   e.target.dataset.type == 0
   ? changeSlider(0) 
   : e.target.dataset.type == 1 
   && changeSlider(1)
})

document.addEventListener("load", changeSlider(0))