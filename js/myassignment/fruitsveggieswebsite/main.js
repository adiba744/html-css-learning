var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
   
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const bar = document.getElementById('bar')
  const nav = Document.getElementById('navbar')

  if(bar){
    bar.addEventListener('click', () =>{
      nav.classList.add('active');
    })
  }