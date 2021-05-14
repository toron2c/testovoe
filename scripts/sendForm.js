
let form = document.querySelector('.form-one');
let sendForm = document.querySelector('.header-form-send');
let formTwo = document.querySelector('.form-two');
let sendFormTwo = document.querySelector('.form-two-send');
form.addEventListener('submit', function (event) {
    let promise = fetch('ajax', {
        method: 'POST',
        body: new FormData(this),
    });

    promise.then(
        response => {
            return response.jso();
        }
    ).then(
        text => {
            alert(text);
        }
    );

    event.preventDefault();
    form.style.display = 'none';
    sendForm.style.display = 'block';
});

formTwo.addEventListener('submit', function (event) {
    let promise = fetch('ajax', {
        method: 'POST',
        body: new FormData(this),
    });

    promise.then(
        response => {
            return response.text();
        }
    ).then(
        text => {
            alert(text);
        }
    );

    event.preventDefault();
    formTwo.style.display = 'none';
    sendFormTwo.style.display = 'block';
});

let c = document.querySelectorAll(".custom-checkb");
let b = document.querySelectorAll(".check__box")

for (let i = 0; i < b.length; i++) {
    b[i].addEventListener('click', function () {
        c[i].checked ? c[i].checked = false : c[i].checked = true;
    })
}
