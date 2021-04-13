/*--------------------DOM SELECTORS --------------------------*/


const desktopNavLink = document.querySelectorAll('.nav__navbar__menu__link');
const hamburgerIcon = document.querySelector('.nav__navbar__toggle-menu');
const dropDownMenu = document.querySelector('.nav__dropdown__menu');
const dropDownMenuBtn = document.querySelectorAll('.nav__dropdown__menu__btn__link');


/*-------- DESKTOP NAV MENU ON  MOUSE-HOVER - MOUSE-OUT ---------- */

desktopNavLink.forEach(link =>{
    //DISPLAY DESKTOP SUBMENU 
    link.addEventListener('mouseover', () =>{
        //TURN MENU ARROW DOWN TO ARROW UP
        link.children[0].children[1].classList.remove('rotate0');
        link.children[0].children[1].classList.add('rotate180'); 
    })
});

desktopNavLink.forEach(link =>{
    //HIDE DESKTOP SUBMENU
    link.addEventListener('mouseout', () =>{
        //TURN MENU ARROW UP TO ARROW DOWN
        link.children[0].children[1].classList.remove('rotate180');
        link.children[0].children[1].classList.add('rotate0');
    })
});

/*------CHANGE HAMBURGER ICON ON SCROLL Y ----------*/

$(window).scroll(function(){
    let scroll = $(window).scrollTop();
      if (scroll > 5) {
        $(".nav__navbar__toggle-menu").css("background" , "white");
        $(".nav__navbar__toggle-menu > div").css("background" , "hsl(356, 100%, 66%)"); 
        $(".nav__navbar__toggle-menu").addClass('scroll');
      }

      else{
          $(".nav__navbar__toggle-menu").css("background" , "transparent");
          $(".nav__navbar__toggle-menu > div").css("background" , "white");  
          $(".nav__navbar__toggle-menu").removeClass('scroll');   
      }
  })



/*---------MOBILE TOGGLE NAV MENU ON CLICK---------------------- */

hamburgerIcon.addEventListener('click', toggleMenu);

function toggleMenu () {
    //TURN X ICON TO HAMBURGER ICON
    if(hamburgerIcon.classList.contains('open')){
        hamburgerIcon.classList.remove('open');
        dropDownMenu.classList.remove('visible');

        dropDownMenuBtn.forEach(menu =>{
            //TURN MENU ARROW UP TO ARROW DOWN
            menu.parentElement.children[1].classList.remove('display');
            menu.children[1].classList.remove('rotate180');
            menu.children[1].classList.add('rotate0');
             //REMOVE MENU LINK HOVER/CLICK STYLES
            menu.children[0].classList.remove('text-hover');

            
        });
    }
    //TURN HAMBURGER ICON TO X ICON
    else{
        hamburgerIcon.classList.add('open');
        dropDownMenu.classList.add('visible');

    }
};


/*-----------------MOBILE SUBMENU ---------------*/

dropDownMenuBtn.forEach(menu =>{
    menu.addEventListener('click', () =>{
        //HIDE SUB-MENU ON CLICK
        if(menu.parentElement.children[1].classList.contains('display')){
            menu.parentElement.children[1].classList.add('hide');
            setTimeout(()=>{
                menu.parentElement.children[1].classList.remove('display');
            }, 100)
            //TURN MENU ARROW UP TO ARROW DOWN
            menu.children[1].classList.remove('rotate180');
            menu.children[1].classList.add('rotate0');
            //REMOVE MENU LINK HOVER/CLICK STYLES
            menu.children[0].classList.remove('text-hover');
        }
        //DISPLAY SUB-MENU ON CLICK
        else{
            menu.parentElement.children[1].classList.remove('hide');
            menu.parentElement.children[1].classList.add('display');
            //TURN MENU ARROW DOWN TO ARROW UP
            menu.children[1].classList.add('rotate180');
            menu.children[1].classList.remove('rotate0');
            //ADD MENU LINK HOVER/CLICK STYLES
            menu.children[0].classList.add('text-hover');
        }

        //HIDE OTHER SUBMENU WHEN A SUBMENU IS DISPLAYED ON CLICK
        let siblings = menu.parentElement.parentElement.children;
        Array.from(siblings).forEach(sibling =>{
                if(sibling.children[0] !== menu && sibling.children[1].classList.contains('display')){
                    sibling.children[1].classList.add('hide');
                    setTimeout(()=>{
                        sibling.children[1].classList.remove('display')
                    }, 80);
                    sibling.children[0].children[1].classList.remove('rotate180');
                    menu.children[0].children[1].classList.add('rotate0');
                    menu.children[0].children[0].classList.remove('text-hover');
                }
            })
    })
});









 

 