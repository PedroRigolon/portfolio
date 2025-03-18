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

// Animação responsiva para about section
gsap.from([".div-foto", ".about_text"], {
  opacity:0,
  duration: 3,
  x: (index, target) => {
    // Verifica se é mobile
    if (window.innerWidth <= 992) {
      return 0; // Sem movimento horizontal em mobile
    }
    return target.classList.contains("about_text") ? 50 : 0;
  },
  y: (index, target) => {
    if (window.innerWidth <= 992) {
      return target.classList.contains("about_text") ? 50 : -50; // Movimento vertical suave em mobile
    }
    return target.classList.contains("div-foto") ? -100 : 0;
  },
  scrollTrigger: {
    trigger: ".div-foto",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play none none none",
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

