let applyForm = document.querySelector('.pages-form');
scrollingElement = (document.scrollingElement || document.body)

let button = document.querySelector('.btn-item')
button.addEventListener('click', ()=>{
    applyForm.classList.add('pages-form-visible');
    scrollingElement.scrollTop = scrollingElement.scrollHeight
})
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