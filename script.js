const callBtnData = [];

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

    const data = {
        name: mainTitle,
        num: number,
        date: new Date().toLocaleTimeString()
    }

    callBtnData.push(data);

    return coinBtn.innerText = finalCoinCount;

}


// Reuaseble Code for Call History

function makeCallHistory () {

    const callHistoryContainer = document.getElementById("call-history-card-container");

    callHistoryContainer.innerText = "";

    for(data of callBtnData) {
        const div = document.createElement("div")

        div.innerHTML = `
        <div class="

            bg-[#e9e8e8] sm:w-[500px] sm:h-[80px] w-[320px]
            mx-auto rounded-xl sm:mt-5 mt-3
            flex justify-between items-center
            ">
            <div class="p-2 sm:p-9">
                <h2 class="font-bold mt-3 text-xl">${data.name}</h2>
                <p class="text-[#8C8C8C] text-xl">${data.num}</p>
            </div>

            <p class="text-lg p-2 sm:p-9">${data.date}</p>

        </div>
        `

        callHistoryContainer.appendChild(div);
    }

};


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

    makeCallHistory();

});

document.getElementById("police-call-btn").addEventListener("click", function () {

    validCallCheck("police-title", "police-num");

    makeCallHistory();

});

document.getElementById("fire-call-btn").addEventListener("click", function () {

    validCallCheck("fire-title", "fire-num");

    makeCallHistory();

});


document.getElementById("ambulance-call-btn").addEventListener("click", function () {

    validCallCheck("ambulance-title", "ambulance-num");

    makeCallHistory();

});

document.getElementById("women-call-btn").addEventListener("click", function () {

    validCallCheck("women-title", "women-num");

    makeCallHistory();

});

document.getElementById("anti-call-btn").addEventListener("click", function () {

    validCallCheck("anti-title", "anti-num");

    makeCallHistory();

});


document.getElementById("ele-call-btn").addEventListener("click", function () {

    validCallCheck("ele-title", "ele-num");

    makeCallHistory();

});

document.getElementById("brac-call-btn").addEventListener("click", function () {

    validCallCheck("brac-title", "brac-num");

    makeCallHistory();

});

document.getElementById("bdr-call-btn").addEventListener("click", function () {

    validCallCheck("bdr-title", "bdr-num");

    makeCallHistory();

});