document.addEventListener('DOMContentLoaded', function() {

    // JS SCRIPTS GO HERE

    const mysitenav = document.querySelector('.site-nav');
    const mymenubutton = document.querySelector('.menu-button');

    // console.log("hello!");

    mymenubutton.onclick = function() {
        if (mysitenav.getAttribute('data-navstate') === 'closed') {
            // if true do this:
            mysitenav.setAttribute('data-navstate','open');
        } else {
            // else (if false) do this:
            mysitenav.setAttribute('data-navstate', 'closed');
        };
    };

});









// FOR INDEX.HTML:
// <swiper-container class="mySwiper" navigation="true" pagination="true" keyboard="true" mousewheel="true"
// css-mode="true">
//     <swiper-slide>
//         <img src="img/SVG/moth.svg" alt="Photo of Jenny">
//     </swiper-slide>
//     <swiper-slide>
//         <img src="img/SVG/pearl.svg" alt="Photo of Jenny">
//     </swiper-slide>
//     <swiper-slide>
//         <img src="img/SVG/wolf.svg" alt="Photo of Jenny">
//     </swiper-slide>
//     <swiper-slide>Slide 4</swiper-slide>
//     <swiper-slide>Slide 5</swiper-slide>
//     <swiper-slide>Slide 6</swiper-slide>
//     <swiper-slide>Slide 7</swiper-slide>
//     <swiper-slide>Slide 8</swiper-slide>
//     <swiper-slide>Slide 9</swiper-slide>
// </swiper-container>

// <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>

// FOR SCRIPT JS:
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
      
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },
      
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
      
//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });

// FOR CSS:
// swiper-container {
//     width: 100%;
//     height: 95%;
//   }

// swiper-slide {
//     text-align: center;
//     font-size: 18px;
//     background: #fff;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     img {
//         display: block;
//         width: 100%;
//         height: 90%;
//         object-fit: cover;
//     }
// }
