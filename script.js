let containerPrincipale = document.querySelector(".mio-container");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        containerPrincipale.innerHTML += '<div class="square"><p>FizzBuzz</p></div>';
    } else if (i % 3 == 0) {
        console.log("Fizz");
        containerPrincipale.innerHTML += '<div class="square"><p>Fizz</p></div>';
    } else if (i % 5 == 0) {
        console.log("Buzz");
        containerPrincipale.innerHTML += '<div class="square"><p>Buzz</p></div>';
    } else {
        console.log(i);
        containerPrincipale.innerHTML += '<div class="square"><p>' + i + '</p></div>'
    }
}