let iElems = document.querySelectorAll('.footer-author-text-star');

iElems.forEach(function (i) {

    i.addEventListener('click', function (event) {
        setColorClass(event.target);
    });
})

let setColorClass = i => {
    i.classList.add('color');
    let previousElem = i.previousElementSibling;
    if (previousElem !== null && previousElem.tagName === 'I') {
        return setColorClass(previousElem);
    }


}