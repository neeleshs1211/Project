
let mainPage = document.querySelector('.main_page');
let searchBtn = document.querySelector('.search_btn');
let searchPage = document.querySelector('.search_page');
let searchFlight = document.querySelector('#search_flight');

let ticketContainer = document.querySelector('.ticket_Container');

let flag = false;
let checkYourTicket = document.querySelector(".check-your-ticket a");

searchBtn.addEventListener('click', () => {
    searchPage.classList.toggle("d_none");
    mainPage.classList.toggle("bg-dark");
    searchBtn.classList.toggle("bg-dark");
});

searchFlight.addEventListener('click', (event) => {
    event.preventDefault();
    let cabinSeat = document.querySelector("#cabin").value;
    let IDNumber = document.querySelector("#your_id").value;
    let placeFrom = document.querySelector("#origin").value;
    let placeTo = document.querySelector("#depart").value;
    let departureDate = document.querySelector("#departure-date").value;
    let flightTime = document.querySelector("#arrival-time").value;
    let seatNo = document.querySelector("#seat_no").value;


    if (placeFrom == "") {
        alert("Orogin Place.");
        document.querySelector("#origin").classList.add("placeholder-error");
        return;
    }
    if (placeTo == "") {
        alert("Depart Place.");
        document.querySelector("#depart").classList.add("placeholder-error");
        return;
    }
    if (departureDate == "") {
        alert("Please fill date.");
        return;
    }
    if (IDNumber == "") {
        alert("Please fill your ID.");
        document.querySelector("#your_id").classList.add("placeholder-error");
        return;
    }

    let newTicket = document.createElement('div');
    newTicket.setAttribute("class", "ticket");
    newTicket.innerHTML = `<div class="ticket_left">
                        <h1>${cabinSeat} seat</h1>
                        <div class="details">
                        <div>
                            <p>PAN no.</p>
                            <p>From</p>
                            <p>To</p>
                            <p>Date</p>
                            <p>Time</p>
                            <p>Seat no.</p>
                        </div>
                        <div>
                            <p>${IDNumber}</p>
                            <p>${placeFrom}</p>
                            <p>${placeTo}</p>
                            <p>${departureDate}</p>
                            <p>${flightTime}</p>
                            <p>${seatNo} 'A'</p>
                        </div>
                        </div>
                    </div>
                    <div class="ticket_right">
                        <h3>Instructions</h3>
                        <p>Immigration: For international flights, follow signs to immigration and customs.</p>
                        <p>Baggage Claim: Collect your checked luggage from the carousel.</p>
                        <p>Security Check: Ensure you have your boarding pass and ID ready.</p>
                        <h4>Left Flight Time  </h4>
                        <h3 id="countdown-timer">00:00:00</h3>
                    </div>`;

    const targetDate = new Date(`${departureDate}T${flightTime}`);
    const countdownElement = newTicket.querySelector("#countdown-timer");

    function updateCountdown() {
        const now = new Date();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = "Your Flight missed😴.";
            clearInterval(interval);
            return;
        }
        const day = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, "0");  // 24 hours in a day, 60 minutes in an hour, 60 seconds in a minute, and 1000 milliseconds in a second. So, 1000 * 60 * 60 * 24 = 86,
        const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

        countdownElement.textContent = `${day}d:${hours}:${minutes}:${seconds}`;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    ticketContainer.appendChild(newTicket);

    searchPage.classList.toggle("d_none");


    mainPage.classList.toggle("bg-dark");
    searchBtn.classList.toggle("bg-dark");


    document.querySelector("#your_id").value = "";
    document.querySelector("#origin").value = "";
    document.querySelector("#depart").value = "";

});



checkYourTicket.addEventListener('click', () => {
    if (flag == false) {
        checkYourTicket.innerHTML = " go back";
        flag = true;
    } else {
        checkYourTicket.innerHTML = "check your ticket";
        mainPage.classList.remove("bg-dark");
        searchBtn.classList.remove("bg-dark");
        flag = false;
    }
    console.log("Check your ticket");
    searchPage.classList.add("d_none");

    document.querySelector(".ticket_Container").classList.toggle("d_none");

});
