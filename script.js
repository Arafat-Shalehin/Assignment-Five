// Reuaseble Code with call and coin functionalities

function validCallCheck (title, num) {

    const mainTitle = document.getElementById(title).innerText;
    
    const number = document.getElementById(num).innerText;

    const coinBtn = document.getElementById("coin-btn");

    const coinCount = parseInt(coinBtn.innerText);

    const finalCoinCount = coinCount - 20;
    
    if (coinCount < 20) {
        alert("You do not have enough coins to make a call.");
        return;
    }

    alert(`${mainTitle}\n${number}`);

    return coinBtn.innerText = finalCoinCount;

}

// Heart Section Functionalities.

const HeartCount = document.getElementById("heart-count");

const fabBtn = document.querySelectorAll(".favourite-btn");

let count = 0;

for (const btns of fabBtn) {

    btns.addEventListener("click", function () {

    count++;
    HeartCount.innerText = count;

    });
    
};


// Call and Coin Functionalities

document.getElementById("national-call-btn").addEventListener("click", function () {

    validCallCheck("national-title", "national-num");

});

document.getElementById("police-call-btn").addEventListener("click", function () {

    validCallCheck("police-title", "police-num");

});

document.getElementById("fire-call-btn").addEventListener("click", function () {

    validCallCheck("fire-title", "fire-num");

});


document.getElementById("ambulance-call-btn").addEventListener("click", function () {

    validCallCheck("ambulance-title", "ambulance-num");

});

document.getElementById("women-call-btn").addEventListener("click", function () {

    validCallCheck("women-title", "women-num");

});

document.getElementById("anti-call-btn").addEventListener("click", function () {

    validCallCheck("anti-title", "anti-num");

});


document.getElementById("ele-call-btn").addEventListener("click", function () {

    validCallCheck("ele-title", "ele-num");

});

document.getElementById("brac-call-btn").addEventListener("click", function () {

    validCallCheck("brac-title", "brac-num");

});

document.getElementById("bdr-call-btn").addEventListener("click", function () {

    validCallCheck("bdr-title", "bdr-num");

});