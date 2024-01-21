let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault()
    loading();
});
function calculate() {

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let text2 = document.querySelector('.text2');

    if (height === '' || height < 0 || isNaN(height)) {
        text2.innerHTML = "Please give a valid height";
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        text2.innerHTML = "Please give a valid weight";
    }
    else {
        let result = (weight / ((height * height) / 10000)).toFixed(2);
        if (result < 18.6) {
            text2.innerHTML = result + "\n" + " ( Under weight )";
        }
        else if (result > 18.6 || result < 24.9) {
            let r = result + "\n" + " ( Normal weight )";
            text2.innerHTML = r;
        }
        else {
            text2.innerHTML = result + "\n" + " ( Over weight )";
        }
    }

    setTimeout(() => {
        text2.style.visibility = 'hidden';
    }, 4000);
}
function loading() {
    let cal = document.querySelector('#load');
    cal.style.visibility = 'visible';

    setTimeout(() => {
        cal.style.visibility = 'hidden';
        calculate();
    }, 2000);
}