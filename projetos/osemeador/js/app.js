const menu = document.querySelector("#menu-mobile");
const menuLinks = document.querySelector(".nav_menu");
const navLogo = document.querySelector("#nav_logo");

let main_count = 1;
document.getElementById("main_radio1").checked = true;
setInterval(function () {
  nextImageMain();
}, 5000);

function nextImageMain() {
  main_count++;
  if (main_count > 3) {
    main_count = 1;
  }

  document.getElementById("main_radio" + main_count).checked = true;
}

let moreAbout_count = 1;
document.getElementById("moreAbout_radio1").checked = true;
setInterval(function () {
  nextImage();
}, 6500);

function nextImage() {
  moreAbout_count++;
  if (moreAbout_count > 3) {
    moreAbout_count = 1;
  }

  document.getElementById("moreAbout_radio" + moreAbout_count).checked = true;
}

// Display para menu Mobile
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Highlight na parte de navegação atual
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const moreAboutMenu = document.querySelector("#moreAbout-page");
  const partners = document.querySelector("#partners");
  const contactMenu = document.querySelector("#contact-page");

  const menus = [
    { element: homeMenu, limit: 520 },
    { element: aboutMenu, limit: 1382 },
    { element: moreAboutMenu, limit: 2244 },
    { element: partners, limit: 2636 },
    { element: contactMenu, limit: 3498 },
  ];

  let scrollPos = window.scrollY;
  console.log(scrollPos);

  if (homeMenu && aboutMenu && moreAboutMenu && partners && contactMenu) {
    const isWideScreen = window.innerWidth > 960;

    if (isWideScreen) {
      for (let i = 0; i < menus.length; i++) {
        if (scrollPos < menus[i].limit) {
          menus.forEach((menu) => menu.element.classList.remove("highlight"));
          menus[i].element.classList.add("highlight");
          break;
        }
      }
    }
  }

  if (elem && (window.innerWidth < 960 || scrollPos > 3004)) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Fechar o menu mobile quando clicar no item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
