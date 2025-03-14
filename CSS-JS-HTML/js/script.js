// ativar plugin scrollTrigger
gsap.registerPlugin(ScrollTrigger);


// impedir botao direito
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); 
  });

  document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', function() {
        const imageUrl = this.getAttribute('href');
        document.getElementById('modalImage').setAttribute('src', imageUrl); 
    });
});


// 
// 
// scrips do gsap (animacao)



// section about
gsap.to("#headline_about", {
  opacity:0,
  duration:1,
  scrollTrigger: {
    trigger: "#headline_about", 
    start: "top 30%", 
    end: "bottom 50%", 
    toggleActions: "play none reverse none", 
  }


})

gsap.from(".div-foto", {
  y: -150,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".div-foto", 
    start: "top 70%", 
    end: "bottom 20%", 
    toggleActions: "play none pause none", 
  }
});

gsap.from(".about_text", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about_text", 
    start: "top 70%", 
    end: "bottom 25%", 
    toggleActions: "play none pause none", 
  }
});

// section knowledge

gsap.from(".shadow-box", {
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: ".shadow-box", 
    start: "top 60%", 
    end: "bottom 25%", 
    toggleActions: "play none none none", 
  }
});

