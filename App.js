let btncounter1 = document.getElementById("btncounter1")
let counter1 = 0;
btncounter1.addEventListener('click', function () {
    counter1++
    color()
    document.getElementById("p1").innerHTML = counter1
})

let btncounter2 = document.getElementById("btncounter2")
let counter2 = 0;
btncounter2.addEventListener('click', function () {
    counter1--
    color()
    document.getElementById("p1").innerHTML = counter1
})

let btncounter3 = document.getElementById("btncounter3")
let counter3 = 0;
btncounter3.addEventListener('click', function () {
    counter1 = 0;
    color()
    document.getElementById("p1").innerHTML = counter1
})
function color() {
    if (counter1 > 0) {
        p1.style.color = 'green'
    } else if (counter1 < 0) {
        p1.style.color = 'red'
    }
    else {
        p1.style.color = 'blue'
    }
}