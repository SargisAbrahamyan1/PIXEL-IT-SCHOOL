const windowWidth = window.innerWidth;

function initMagneticButtons() {
    var magnets = document.querySelectorAll('.magnetic');
    if (window.innerWidth >= 1240) {
        magnets.forEach((magnet) => {
            magnet.addEventListener('mousemove', moveMagnet);
            magnet.addEventListener('mouseleave', function (event) {
                gsap.to(event.currentTarget, 1.5, {
                    x: 0,
                    y: 0,
                    ease: Elastic.easeOut
                });
                gsap.to($(this).find(".btn-text"), 1.5, {
                    x: 0,
                    y: 0,
                    ease: Elastic.easeOut
                });
            });
        });
        function moveMagnet(event) {
            var magnetButton = event.currentTarget;
            var bounding = magnetButton.getBoundingClientRect();
            var magnetsStrength = magnetButton.getAttribute("data-strength");
            var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
            gsap.to(magnetButton, 1.5, {
                x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrength,
                y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrength,
                rotate: "0.001deg",
                ease: Power4.easeOut
            });
            gsap.to($(this).find(".btn-text"), 1.5, {
                x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
                y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
                rotate: "0.001deg",
                ease: Power4.easeOut
            });
        }
        $('.btn-click.magnetic').on('mouseenter', function () {
            if ($(this).find(".btn-fill").length) {
                gsap.to($(this).find(".btn-fill"), .6, {
                    startAt: { y: "76%" },
                    y: "0%",
                    ease: Power2.easeInOut
                });
            }

            if ($(this).find(".btn-text-inner.change").length) {
                gsap.to($(this).find(".btn-text-inner.change"), .3, {
                    startAt: { color: "#191B1D" },
                    color: "#191B1D",
                    ease: Power3.easeIn,
                });
            }
        });
        $('.btn-click.magnetic').on('mouseleave', function () {
            if ($(this).find(".btn-fill").length) {
                gsap.to($(this).find(".btn-fill"), .6, {
                    y: "-76%",
                    ease: Power2.easeInOut
                });
            }
            if ($(this).find(".btn-text-inner.change").length) {
                gsap.to($(this).find(".btn-text-inner.change"), .3, {
                    color: "#FFFFFF",
                    ease: Power3.easeOut,
                    delay: .3
                });
            }
            if ($(this).find(".btn-text-inner-bg.change").length) {
                gsap.to($(this).find(".btn-text-inner-bg.change"), .3, {
                    color: "#000000",
                    ease: Power3.easeOut,
                    delay: .3
                });
            }
        });


    }
}
initMagneticButtons();

var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$("a, button, span, p, h1, h2, h3, h4, h5, h6, li").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});
$("a, button, span, p, h1, h2, h3, h4, h5, h6, li").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    if (scrolled > 1) {
        document.querySelector(".header-container").classList.add("background");
        document.querySelector(".header-center").classList.add("invertNone");
    }
    else {
        document.querySelector(".header-container").classList.remove("background");
        document.querySelector(".header-center").classList.remove("invertNone");
    }
});

let search = document.querySelector('.search');
let searchDiv = document.querySelector('.search-div');
let openMenu = document.querySelector('.menu-open');
let closeMenu = document.querySelector('.menu-close');
let mainMenu = document.querySelector('.main');
let headerBg = document.querySelector('.header-container');
let line = document.querySelector('.line');
let line2 = document.querySelector('.line2');

search.onclick = () => {
    line.setAttribute('style', 'transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);');
    line2.setAttribute('style', 'transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);');
    if (searchDiv.style.height != '100vh') {
        searchDiv.style.height = '100vh';
        $('body').addClass('scroll-hidden');
        document.querySelector(".header-container").classList.remove("background");
        if (window.scrollY < 50) {
            document.querySelector(".header-center").classList.add("invertNone");
        }
    }
    else {
        document.querySelector(".header-container").classList.add("background");
        searchDiv.style.height = '0vh';
        document.querySelector('body').classList.remove('scroll-hidden');
        document.querySelector(".header-container").classList.remove("background");
        if (window.scrollY > 50) {
            document.querySelector(".header-container").classList.add("background");
        }
        if (window.scrollY < 50) {
            document.querySelector(".header-center").classList.remove("invertNone");
        }
    }
    if (mainMenu.style.height = '100vh') {
        mainMenu.style.height = '0vh';
        openMenu.style.display = 'flex';
    }
}

openMenu.onclick = () => {
    if (mainMenu.style.height != '100vh') {
        mainMenu.style.height = '100vh';
        line.setAttribute('style', 'width: 30px; transform: translate3d(0px, 6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);');
        line2.setAttribute('style', 'width: 30px; transform: translate3d(0px, -6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);');
        document.querySelector(".header-container").classList.remove("background");
        if (searchDiv.style.height = '100vh') {
            $('body').addClass('scroll-hidden');
            searchDiv.style.height = '0vh';
        }
        if (window.scrollY < 50) {
            document.querySelector(".header-center").classList.add("invertNone");
        }
    }
    else {
        mainMenu.style.height = '0vh';
        line.setAttribute('style', 'transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);');
        line2.setAttribute('style', 'transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);');
        document.querySelector('body').classList.remove('scroll-hidden');
        document.querySelector(".header-container").classList.remove("background");
        if (window.scrollY > 50) {
            document.querySelector(".header-container").classList.add("background");
        }
        if (window.scrollY < 50) {
            document.querySelector(".header-center").classList.remove("invertNone");
            document.querySelector(".header-container").classList.remove("background");
        }
    }
}