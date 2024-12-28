function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
let myself = ['Prem Chand','Website Developer'];
let i = 0;
const me = document.querySelector('.me');
function updateText() {
  me.textContent = myself[i];
  me.classList.remove('typing'); 
  void me.offsetWidth; 
  me.classList.add('typing'); 
  i = (i + 1) % myself.length;
}
setInterval(updateText, 2500);
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
const menuLinks = document.querySelectorAll(".menu-item a");

function updateActiveLink() {
  const currentHash = window.location.hash;
  menuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentHash) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("hashchange", updateActiveLink);
window.addEventListener("load", updateActiveLink);
function scrollActivateLink(){
  const sections = document.querySelectorAll(".content-block");
  let currentSectionId = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      currentSectionId = section.getAttribute("id");
    }
  });
  menuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("scroll",scrollActivateLink);
window.addEventListener("load",scrollActivateLink);
let mobile_menu=document.querySelector('.menu-bar')
let menu_container=document.querySelector('.menu-container')

mobile_menu.addEventListener('click', () => {
  menu_container.classList.toggle('active');
});
// observer
const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target)
    }
  })
},{threshold:[0, 0.5, 1]})

menuLinks.forEach(anchor=>{
  observer.observe(anchor) 
})

const aboutChilds = document.querySelectorAll(".about > *"); 
aboutChilds.forEach((ele) => {
  observer.observe(ele); 
});
const educationChilds = document.querySelectorAll(".education *"); 
educationChilds.forEach((ele) => {
  observer.observe(ele); 
});
const skillchild = document.querySelectorAll(".skill-block .skill-content *"); 
skillchild.forEach((ele) => {
  observer.observe(ele); 
});
const projectchild = document.querySelectorAll(".project *"); 
projectchild.forEach((ele) => {
  observer.observe(ele); 
});
const certificationchild = document.querySelectorAll(".certification *"); 
certificationchild.forEach((ele) => {
  observer.observe(ele); 
});
const contactchild = document.querySelectorAll(".contact *"); 
contactchild.forEach((ele) => {
  observer.observe(ele); 
});


