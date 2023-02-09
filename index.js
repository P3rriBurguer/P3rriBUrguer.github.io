function scrollToSection(event, sectionId) {
  event.preventDefault();
  document.querySelector(sectionId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

window.onscroll = function() { 
  var header = document.querySelector(".header"); 
  if (window.pageYOffset > header.offsetTop) { 
    header.classList.add("header-floating"); 
  } else { 
    header.classList.remove("header-floating"); 
  } 
};



