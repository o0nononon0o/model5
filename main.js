'use strict';
{

  document.querySelector('.hamburger-menu_btn').addEventListener('click', () => {
    if(document.querySelector('.ham1').classList.contains('open')&&document.querySelector('.ham2').classList.contains('open')&&document.querySelector('.ham3').classList.contains('open')){
      document.querySelector('.ham1').classList.remove('open');
      document.querySelector('.ham2').classList.remove('open');
      document.querySelector('.ham3').classList.remove('open');
      document.querySelector('.hamburger-menu_inner').classList.remove('open');
      document.querySelector('body').classList.remove('open');
    } else {
      document.querySelector('.ham1').classList.add('open');
      document.querySelector('.ham2').classList.add('open');
      document.querySelector('.ham3').classList.add('open');
      document.querySelector('.hamburger-menu_inner').classList.add('open');
      document.querySelector('body').classList.add('open');
    }
    });

    const links = document.querySelectorAll('.hamburger-menu_inner a');
    links.forEach((link)=>{link.addEventListener('click', () => {
        document.querySelector('.ham1').classList.remove('open');
        document.querySelector('.ham2').classList.remove('open');
        document.querySelector('.ham3').classList.remove('open');
        document.querySelector('.hamburger-menu_inner').classList.remove('open');
        document.querySelector('body').classList.remove('open');
      });
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
  if(window.scrollY > 500){
    document.querySelector('.top_btn').style.opacity = '1';
  } else {
    document.querySelector('.top_btn').style.opacity = '0';
  }
});

window.addEventListener('scroll', () => {
  let cat = document.querySelector('.catch');
  if (cat.getBoundingClientRect().top < window.innerHeight * 0.7) { 
    cat.classList.add('is-show'); }
});

window.addEventListener('scroll', () => {
  let purpose = document.querySelector('#purpose');
  if (purpose.getBoundingClientRect().top < window.innerHeight * 0.7) { 
    document.querySelector('.purpose_inner').classList.add('is-show'); 
    document.querySelector('#pr1').classList.add('is-show'); 
    document.querySelector('#deco1').classList.add('is-show'); 
    document.querySelector('#deco2').classList.add('is-show'); }
});

window.addEventListener('scroll', () => {
  let product_img = document.querySelector('.product_inner img');
  if (product_img.getBoundingClientRect().top < window.innerHeight * 0.7) { 
    product_img.classList.add('is-show'); }
});

window.addEventListener('scroll', () => {
  let reviews = document.querySelectorAll('.review_outer');
  reviews.forEach((review) => {
  if (review.getBoundingClientRect().top < window.innerHeight * 0.7) { 
    review.classList.add('is-show');
   }
  }
)});

window.addEventListener('scroll', () => {
  let pr = document.querySelector('#pr');
  if (pr.getBoundingClientRect().top < window.innerHeight * 0.7) { 
    document.querySelector('#pr img').classList.add('is-show'); 
    document.querySelector('#pr h3').classList.add('is-show');  }
});

}
{
  const form = document.querySelector('form');
  const btn = document.querySelector('form .btn-submit');

  form.addEventListener('input', () => {
    const isRequired = form.checkValidity();
    if (isRequired) {
      btn.disabled = false;
      btn.classList.add('is-active');
      btn.classList.remove('is-inactive');
      btn.addEventListener('mouseover', () => {
        btn.style.opacity = .5;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.opacity = 1;
      });
    } else {
      btn.disabled = true;
      btn.classList.add('is-unactive');
      btn.classList.remove('is-active');
    }
  });

}