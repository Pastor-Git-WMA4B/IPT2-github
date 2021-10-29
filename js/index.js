const iconTrigger = document.querySelector('#iconTrigger');
const icon = document.querySelector('#icon');
const menuContainer = document.querySelector('.menu-container');

iconTrigger.addEventListener('click', () => {
  if (icon.classList.contains('fa-bars')) {
    /* icon */
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-close');
    /* menu */
    menuContainer.classList.remove('hide');
    menuContainer.classList.add('show');
  } else {
    /* icon */
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-close');
    /* menu */
    menuContainer.classList.add('hide');
    menuContainer.classList.remove('show');
  }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      if (menuContainer.className.includes("show")) {
        menuContainer.classList.remove('show');
        menuContainer.classList.add('hide');
  
        icon.classList.remove('fa-close');
        icon.classList.add('fa-bars');
      }
    }
  });