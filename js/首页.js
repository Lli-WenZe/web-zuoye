let currentIndex = 0;  
const totalItems = document.querySelectorAll('.carousel-item').length;  
const carouselInner = document.querySelector('.carousel-inner');  
const slideInterval = 3000; // 3秒  
let slideTimer;  
  
function showSlide(index) {  
    const offset = -index * 100 + '%';  
    carouselInner.style.transform = `translateX(${offset})`;  
}  
  
function nextSlide() {  
    currentIndex = (currentIndex + 1) % totalItems;  
    showSlide(currentIndex);   
}  
  
function prevSlide() {  
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;  
    showSlide(currentIndex);  
}  
  
function startAutoPlay() {  
    slideTimer = setInterval(nextSlide, slideInterval);  
}  
  
function stopAutoPlay() {  
    clearInterval(slideTimer);  
}  
  
// 添加鼠标悬停和离开事件监听器  
const carousel = document.querySelector('.carousel');  
carousel.addEventListener('mouseover', stopAutoPlay);  
carousel.addEventListener('mouseout', startAutoPlay);  
  
// 初始化轮播图  
showSlide(currentIndex);  
startAutoPlay();