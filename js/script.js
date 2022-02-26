/*==========================================================================================================================================================================*/
/* Проверка устройства, на котором открыта страница */
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};


function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}
if (isIE()) {
    document.querySelector("body").classList.add("_ie");
}
if (isMobile.any()) {
    document.querySelector("body").classList.add("_touch");
}



/*==========================================================================================================================================================================*/
/* Проверка браузера на поддержку формата webp */
function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("_webp");
    } else {
        document.querySelector("body").classList.add("_no-webp");
    }
});



/*==========================================================================================================================================================================*/
/* Задание Изображению в HTML (<img>) Свойства Фона */
function ibg() {
    if (isIE()) {
        let imageBg = document.querySelectorAll("._ibg");
        for (let i = 0; i < imageBg.length; i++) {
            if (imageBg[i].querySelector("img") && imageBg[i].querySelector("img").getAttribute("src") != null) {
                imageBg[i].style.backgroundImage = "url(" + imageBg[i].querySelector("img").getAttribute("src") + ")";
            }
        }
    }
}
ibg();



/*==========================================================================================================================================================================*/
/* Кнопка "Показать все" */
let btn = document.querySelector(".our-menu__btn");
if (btn) {
    btn.addEventListener("click", showAll);
    function showAll(e) {
        e.preventDefault();
        let ourmenuItems = document.querySelectorAll(".our-menu__item");
        for (let i = 0; i < ourmenuItems.length; i++) {
            if (ourmenuItems[i].classList.contains("_hidden")) {
                ourmenuItems[i].classList.remove("_hidden");
            }
        }
    }
};



/*==========================================================================================================================================================================*/
/* Menu Burger */
const iconMenu = document.querySelector(".header-menu__icon");
const menuBody = document.querySelector(".header-menu");
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}


function menu_close() {
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}



/*==========================================================================================================================================================================*/
/* Скрытие, блокировка и разблокировка скролла */
function bodyLock() {
    const body = document.querySelector("body");
    const lockPadding = document.querySelectorAll("._lock");														
	const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    const timeout = 800;
	if (lockPadding.length > 0) {												
		for (let index = 0; index < lockPadding.length; index++) {			
			const el = lockPadding[index];									
			el.style.paddingRight = lockPaddingValue;					
		}
	}
	body.style.paddingRight = lockPaddingValue;									
	body.classList.add("_lock");												
	unlock = false;															
	setTimeout(function () {												
		unlock = true;														
	}, timeout);																
}


function bodyUnLock() {														
	setTimeout(function () {													
		if (lockPadding.length > 0) {										
			for (let index = 0; index < lockPadding.length; index++) {		
				const el = lockPadding[index];									
				el.style.paddingRight = "0px";								
			}
		}
		body.style.paddingRight = "0px";									
		body.classList.remove("_lock");										
	}, timeout);															
	unlock = false;														
	setTimeout(function () {												
		unlock = true;															
	}, timeout);															
}



/*==========================================================================================================================================================================*/
/* Плавная прокрутка до раздела сайта при клике на ссылку или пункт меню */
const menuLinks = document.querySelectorAll("[data-goto]");              
if (menuLinks.length > 0) {                                                                 
	menuLinks.forEach(menuLink => {                                                     
		menuLink.addEventListener("click", onMenuLinkClick);                                
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;                                                         
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);               
			let gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            if (window.innerWidth < 767.98) {
                gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
            }
			if (iconMenu.classList.contains("_active")) {                                 
				document.body.classList.remove("_lock");                                
				iconMenu.classList.remove("_active");                                   
				menuBody.classList.remove("_active");                                
			}
			window.scrollTo({                                                     
				top: gotoBlockValue,                                                  
				behavior: "smooth"                                           
			});
			e.preventDefault();                                                 
		}
	}
}



/*==========================================================================================================================================================================*/
/* Scroll Reveal */
window.onload = function () {
    ScrollReveal({
        easing: "ease-in-out",
    });
    ScrollReveal().reveal("._animate-top", {
        origin: "top",
        easing: "ease-in-out",
        duration: 500,
        distance: "3rem",
        delay: 300
    });
    ScrollReveal().reveal("._animate-left", {
        origin: "left",
        duration: 700,
        distance: "15rem",
        delay: 300
    });
    ScrollReveal().reveal("._animate-left-two", {
        origin: "left",
        duration: 800,
        distance: "20rem",
        delay: 500
    });
    ScrollReveal().reveal("._animate-left-three", {
        origin: "left",
        duration: 900,
        distance: "20rem",
        delay: 1000
    });
    ScrollReveal().reveal("._animate-right", {
        origin: "right",
        duration: 700,
        distance: "15rem",
        delay: 500,
    });
    ScrollReveal().reveal("._animate-right-two", {
        origin: "right",
        duration: 800,
        distance: "20rem",
        delay: 800
    });
    ScrollReveal().reveal("._animate-right-three", {
        origin: "right",
        duration: 1000,
        distance: "15rem",
        delay: 1000
    });
    ScrollReveal().reveal("._animate-bottom", {
        origin: "bottom",
        duration: 700,
        distance: "8rem",
        delay: 300
    });
    ScrollReveal().reveal("._animate-scale", {
        duration: 800,
        scale: 0.3,
        delay: 1000
    })
};



/*==========================================================================================================================================================================*/
/* Кнопка "Вверх" */
let buttonUp = document.querySelector(".footer-content__button-up");
buttonUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});