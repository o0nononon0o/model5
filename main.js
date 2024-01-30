'use strict';
{

  document.querySelector('.hamburger-menu_btn').addEventListener('click', () => {
    if(document.querySelector('.ham1').classList.contains('open')&&document.querySelector('.ham2').classList.contains('open')&&document.querySelector('.ham3').classList.contains('open')){
      document.querySelector('.ham1').classList.remove('open');
      document.querySelector('.ham2').classList.remove('open');
      document.querySelector('.ham3').classList.remove('open');
      document.querySelector('.hamburger-menu_inner').classList.remove('open');
    } else {
      document.querySelector('.ham1').classList.add('open');
      document.querySelector('.ham2').classList.add('open');
      document.querySelector('.ham3').classList.add('open');
      document.querySelector('.hamburger-menu_inner').classList.add('open');
    }
    });

    const hero1 = document.querySelector('#hero1');
    const hero2 = document.querySelector('#hero2');
    const hero3 = document.querySelector('#hero3');
    let num = 1;

    function slideShow() {
        if(num === 3){
          num = 1;
          hero1.classList.add('slide');
          hero3.classList.remove('slide');
        } else {
          document.querySelector(`#hero${num}`).classList.remove('slide');
          num ++;
          document.querySelector(`#hero${num}`).classList.add('slide');
        }
    } 

    let id = setInterval(slideShow, 3000);

    document.querySelector('.slide-left').addEventListener('click', () => {
      if(num === 1){
        num = 3;
        hero3.classList.add('slide');
        hero1.classList.remove('slide');
        clearInterval(id);
        id = setInterval(slideShow, 3000);
      } else {
        document.querySelector(`#hero${num}`).classList.remove('slide');
        num --;
        document.querySelector(`#hero${num}`).classList.add('slide');
        clearInterval(id);
        id = setInterval(slideShow, 3000);
      }
    });

    document.querySelector('.slide-right').addEventListener('click', () => {
      if(num === 3){
        num = 1;
        hero1.classList.add('slide');
        hero3.classList.remove('slide');
        clearInterval(id);
        id = setInterval(slideShow, 3000);
      } else {
        document.querySelector(`#hero${num}`).classList.remove('slide');
        num ++;
        document.querySelector(`#hero${num}`).classList.add('slide');
        clearInterval(id);
        id = setInterval(slideShow, 3000);
      }
    });

    document.querySelector('.sns_outer').addEventListener('mouseover', () => {
      document.querySelector('.sns_inner1').style.animationPlayState = "paused";
      document.querySelector('.sns_inner2').style.animationPlayState = "paused";
  });
  document.querySelector('.sns_outer').addEventListener('mouseleave', () => {
    document.querySelector('.sns_inner1').style.animationPlayState = "running";
    document.querySelector('.sns_inner2').style.animationPlayState = "running";
});

window.addEventListener('scroll', () => {
  if(window.scrollY > 400){
    document.querySelector('.top_btn').style.opacity = '1';
  } else {
    document.querySelector('.top_btn').style.opacity = '0';
  }
});


}
