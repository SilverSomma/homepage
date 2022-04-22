import LocomotiveScroll from 'locomotive-scroll';

  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {smooth: false},
    smartphone: {smooth: false},
    })
    setTimeout(() => {
      scroll.update();
    }, 300);


//Smooth scrolling buttons.

document.getElementById("blinkingStart").addEventListener("click",function(){
scroll.scrollTo(document.getElementById("navigation"));
scroll.update();
})
document.getElementById("aboutMe").addEventListener("click",function(){
  scroll.scrollTo(".aboutMe");
  scroll.update();
  })
document.getElementById("curriculumVitae").addEventListener("click",function(){
    scroll.scrollTo(".cv");
    scroll.update();
    })
document.getElementById("portfolio").addEventListener("click",function(){
      scroll.scrollTo(".portfolio");
      scroll.update();
      })
document.getElementById("contactMe").addEventListener("click",function(){
        scroll.scrollTo(".contactMeEnd");
        scroll.update();
        })
document.getElementById("blinkingEnd").addEventListener("click",function(){
          scroll.scrollTo(0);
          scroll.update();
          })


        
          const dropDown = document.querySelector('.dropdown');
          const slide = document.querySelector('.slide');
          const touch = document.querySelector('.touch');
          const contactMe = document.querySelector('.contactMe');
          const bannerh2 = document.querySelector('.banner h2');
          const bannerh1 = document.querySelector('.banner h1');
         
        
          document.querySelector(".contactMe").addEventListener("click", function(){
            dropDown.classList.toggle("click");
          dropDown.classList.toggle("blackFont");
          slide.classList.toggle("click");
          touch.classList.toggle("click");
          contactMe.classList.toggle("fontSize");
          bannerh2.classList.toggle("hidden");
          bannerh1.classList.toggle("hidden");
        })

        document.querySelector(".banner-image").addEventListener("click", function(){
          dropDown.classList.remove("click");
          dropDown.classList.remove("blackFont");
          slide.classList.remove("click");
          touch.classList.remove("click");
          contactMe.classList.remove("fontSize");
          bannerh2.classList.remove("hidden");
          bannerh1.classList.remove("hidden");
        })
    

        
      
     
     
      
      
      
          
        
        
          
          
         
