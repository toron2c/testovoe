let elemsTitleArticle = document.querySelectorAll('.header-form-box-link');
let itemFiltrs = document.querySelectorAll('.filtr-item');
elemsTitleArticle.forEach(e => {
    e.addEventListener('click', evt => {
        evt.target.classList.contains('active-article') ? evt.target.classList.remove('active-article') : evt.target.classList.add('active-article');

    })
});

itemFiltrs.forEach(e => {
    e.addEventListener('click', evt => {
        evt.target.classList.contains('active') ? evt.target.classList.remove('active') : evt.target.classList.add('active');

    })
});

