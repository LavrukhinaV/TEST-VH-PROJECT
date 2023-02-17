import './index.css';

import {mobileMenu, mobileMenuButtonOpen, mobileMenuButtonClose, prevBtn, nextBtn,
  slides, mobileMenuActiveClass, sliderImageAppearingClass, sliderImageDisappearingClass,
  sliderImageReverceAppearingClass, sliderImageReverceDisappearingClass} from '../utils/constants.js';

function openMobileMenu() {
  mobileMenu.classList.add(mobileMenuActiveClass);
};

function closeMobileMenu() {
  mobileMenu.classList.remove(mobileMenuActiveClass);
};

document.addEventListener('click', e => {
  let target = e.target;
  let menu = target == mobileMenu || mobileMenu.contains(target);
  let button = target == mobileMenuButtonOpen;
  let menu_is_active = mobileMenu.classList.contains(mobileMenuActiveClass);
  
  if (!menu && !button && menu_is_active) {
    closeMobileMenu();
  }
})

mobileMenuButtonOpen.addEventListener('click', openMobileMenu);
mobileMenuButtonClose.addEventListener('click', closeMobileMenu)


let currentSlide = 0;

nextBtn.onclick = () =>{
  if(currentSlide < slides.length - 1){
    currentSlide++
    slides[currentSlide].className = sliderImageAppearingClass
    slides[currentSlide].previousElementSibling.className = sliderImageDisappearingClass
  } else {
    slides[currentSlide].className = sliderImageDisappearingClass
    currentSlide = 0
    slides[currentSlide].className = sliderImageAppearingClass
  }
}

prevBtn.onclick = () =>{
    if(currentSlide > 0 ){
      slides[currentSlide].className = sliderImageReverceDisappearingClass
      currentSlide--
      slides[currentSlide].className = sliderImageReverceAppearingClass
    }else{
      slides[currentSlide].className = sliderImageReverceDisappearingClass
      currentSlide = slides.length-1
      slides[currentSlide].className = sliderImageReverceAppearingClass
    }
}

