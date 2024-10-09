var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
   
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const bar = document.getElementById('menu-bar')
  const nav = document.getElementById('navbar')

  if(bar){
    bar.addEventListener('click', () =>{
      nav.classList.add('active');
    })
  }






//   const bar = document.getElementById('bar')
// const close = document.getElementById('close')
// const nav = document.getElementById('navbar')

// if(bar){
//     bar.addEventListener('click', () =>{
//         nav.classList.add('active');
//     })
// }