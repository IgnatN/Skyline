///////// HEADER VISIBLE / NO VISIVBLE ,  OVERLAY VIDEO VISIBLE

document.addEventListener('DOMContentLoaded', () => {
    const blockVideo = document.querySelector('.block-video');
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        document.querySelector('.block-video-overlay').classList.add('block-video-overlay-visible')
        let scrollTop = window.scrollY
        let blockVideoCenter = blockVideo.offsetHeight / 2;
        (scrollTop >= blockVideoCenter) ? header.classList.add('header-visible') : header.classList.remove('header-visible');
    });
});

//////// Block2 WHAT WE HAVE TO OFFER

let block2 = document.querySelector('.offer-blocks');

class Offer {
    constructor(img, text) {
        this.img = img;
        this.text = text
    }
    Offers() {
        block2.innerHTML += ` <div class="offer">
                                <div class="img-offer"> 
                                  <img src="${this.img}" alt="img">
                                </div>
                                     <h1>${this.text}</h1>
                            </div> `
    }
}
let offer1 = new Offer('./images/drivers.png', 'COMPANY DRIVERS');
offer1.Offers();
let offer2 = new Offer('./images/owner.png', 'OWNER OPERATORS');
offer2.Offers();
let offer3 = new Offer('./images/dispatchservices.png', 'DISPATCH SERVICES');
offer3.Offers();

let offers = document.querySelectorAll('.offer');
offers[0].addEventListener('click', () => {
    window.location = './driver.html';
});
offers[1].addEventListener('click', () => {
    window.location = './owner.html'
});
offers[2].addEventListener('click', () => {
    window.location = './dispatch.html'
});
let ofer = document.querySelectorAll('.offer-btn');
ofer[0].addEventListener('click', () => {
    window.location = './driver.html';
});
ofer[1].addEventListener('click', () => {
    window.location = './dispatch.html';
});
document.querySelector('.offer-btn2').addEventListener('click', () => {
    window.location = './owner.html'
})
///////////  Rewiews Dots

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("rewiews");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

///////// Friends Logo visible 
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show')
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element');
for (let elm of elements) {
    observer.observe(elm);
}
elements[0].style.transition = '1s';
elements[1].style.transition = '5s';
elements[2].style.transition = '9s';