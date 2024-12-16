let url = window.location.href;
// console.log(url);
let urlSegment = url.split("?");
// console.log(urlSegment[1]);


let play_btn = document.getElementById("play");
let video = document.getElementById("video");

play_btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    video.style.display = "unset ";
    play_btn.classList.remove("bi-play-fill");
    play_btn.classList.add("bi-pause");
  } else {
    video.pause();
    video.style.display = "none";
    play_btn.classList.add("bi-play-fill");
    play_btn.classList.remove("bi-pause");
  }
});

// video.addEventListener('ended', () =>{
//     video.play();
// })

let date = new Date();
let main_date = date.getDate();
// console.log(main_date);

Array.from(document.getElementsByClassName("date_point")).forEach((el) => {
  if (el.innerText == main_date) {
    el.classList.add("h6_active");
  }
});

let pvr = [
  {
    pvr: "PVR Vegus",
    movie: "Jawan",
    loc: "Dwarika Sector 14, New Delhi",
    audi: 1,
    type: "4DX",
    series: ["H", "G", "F", "E", "D", "C", "B", "A"],
    row_section: 3,
    seat: 24,
    h: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
    g: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    f: [5, 6, 15, 17, 18],
    e: [2, 7, 8, 17, 18],
    d: [5, 16, 15, 23, 22],
    c: [1, 2, 11, 12, 19],
    b: [8, 5],
    a: [],
    price: [800, 800, 560, 560, 560, 560, 430, 430],
    date: main_date,
    img: "movies_images/jawan.jpg",
    video: "movies_images/Jawan Official Trailer.mp4",
  },
  {
    pvr: "PVR Vegus",
    movie: "Gadar2",
    loc: "Dwarika Sector 14, New Delhi",
    audi: 2,
    type: "4DX",
    series: ["H", "G", "F", "E", "D", "C", "B", "A"],
    row_section: 3,
    seat: 24,
    h: [3, 8, 21, 22, 9, 13, 16, 18, 2, 12, 15],
    g: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
    f: [1, 3, 13, 15, 22],
    e: [3, 9, 10, 20, 24],
    d: [7, 12, 9, 21, 20],
    c: [6, 8, 11, 12, 19],
    b: [8, 5, 2, 13, 14],
    a: [],
    price: [800, 800, 560, 560, 560, 560, 430, 430],
    date: main_date,
    img: "movies_images/Gadar2.jpg",
    video: "movies_images/Gadar2 Official Trailer .mp4",
  },
  {
    pvr: "PVR Vegus",
    movie: "Jawan",
    loc: "Dwarika Sector 14, New Delhi",
    audi: 1,
    type: "4DX",
    series: ["H", "G", "F", "E", "D", "C", "B", "A"],
    row_section: 3,
    seat: 24,
    h: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
    g: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    f: [5, 6, 15, 17, 18],
    e: [2, 7, 8, 17, 18],
    d: [5, 16, 15, 23, 22],
    c: [1, 2, 11, 12, 19],
    b: [8, 5],
    a: [18, 14, 16, 17, 13, 12, 11],
    price: [800, 800, 560, 560, 560, 560, 430, 430],
    date: main_date + 1,
    img: "movies_images/jawan.jpg",
    video: "movies_images/Jawan Official Trailer.mp4",
  },
  {
    pvr: "PVR Vegus",
    movie: "Gadar2",
    loc: "Dwarika Sector 14, New Delhi",
    audi: 2,
    type: "4DX",
    series: ["H", "G", "F", "E", "D", "C", "B", "A"],
    row_section: 3,
    seat: 24,
    h: [3, 8, 21, 22, 9, 13, 16, 18, 2, 12, 15],
    g: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
    f: [1, 3, 13, 15, 22],
    e: [3, 9, 10, 20, 24],
    d: [7, 12, 9, 21, 20],
    c: [6, 8, 11, 12, 19],
    b: [8, 5, 2, 13, 14],
    a: [5, 6, 7, 8, 10, 18],
    price: [800, 800, 560, 560, 560, 560, 430, 430],
    date: main_date + 1,
    img: "movies_images/Gadar2.jpg",
    video: "movies_images/Gadar2 Official Trailer .mp4",
  },
];

let addSeats = (arr) => {
  // console.log(arr);
  arr.forEach((el, i) => {
    const { series, row_section, seat, price, a, b, c, d, e, f, g, h } = el;

    // create row
    for (let index = 0; index < series.length; index++) {
      // console.log(series[index]);
      let row = document.createElement("div");
      row.className = "row";

      let booked_seats = [];
      booked_seats = [...eval(series[index].toLocaleLowerCase())];
      // console.log(booked_seats);

      // create seat
      for (let seats = 0; seats < seat; seats++) {
        if (seats === 0) {
          let span = document.createElement("span");
          span.innerText = series[index];
          row.appendChild(span);
        }

        let li = document.createElement("li");
        let filter = booked_seats.filter((el) => {
          return el === seats;
        });
        // console.log(filter);

        if (filter.length > 0) {
          li.className = "seat booked";
        } else {
          li.className = "seat";
        }

        li.id = series[index] + seats;
        li.setAttribute("book", seats);
        li.setAttribute("sr", series[index]);
        li.innerText = price[index];

        li.onclick = () => {
          if (li.className === "seat booked") {
            li.classList.remove("selected");
          } else {
            li.classList.toggle("selected");
          }
          let len = Array.from(
            document.getElementsByClassName("selected")
          ).length;
          if (len > 0) {
            document.getElementById("book_ticket").style.display = "unset";
          } else {
            document.getElementById("book_ticket").style.display = "none";
          }
        };

        row.appendChild(li);

        if (seats === seat - 1) {
          let span = document.createElement("span");
          span.innerText = series[index];
          row.appendChild(span);
        }
      }
      document.getElementById("chair").appendChild(row);
    }
  });
};

let data = pvr.filter(
  (obj) => obj.date == main_date && obj.movie == urlSegment[1]
  
  
  
);
// console.log(data);
document.getElementById("title").innerText = data[0].movie;
document.getElementById("poster").src = data[0].img;
document.getElementById("video").src = data[0].video;

addSeats(data);

let offDate = () => {
  Array.from(document.getElementsByClassName("date_point")).forEach((el) => {
    el.classList.remove("h6_active");
  });
};

Array.from(document.getElementsByClassName("date_point")).forEach((el) => {
  el.addEventListener("click", () => {
    if (el.innerText > date.getDate() - 1) {
      offDate();
      el.classList.add("h6_active");
      main_date = +el.innerText;
      document.getElementById("chair").innerHTML = "";
      let data = pvr.filter(
        (obj) => obj.date == main_date && obj.movie == urlSegment[1]
      );
      addSeats(data);
    }
  });
});

document.getElementById("book_ticket").addEventListener("click", () => {
  Array.from(document.getElementsByClassName("selected")).forEach((el) => {
    let seat_no = el.getAttribute("book");
    let seat_sr = el.getAttribute("sr").toLocaleLowerCase();
    let seat_price = el.innerText;

    let obj = {
      movie: urlSegment[1],
      date: main_date,
    };

    let getData = pvr.map((obj) => {
      if (obj.movie === urlSegment[1] && obj.date === main_date) {
        obj[seat_sr].push(+seat_no);
      }
      return obj;
    });

    // console.log(getData);
    document.getElementById("chair").innerHTML = "";
    let data = getData.filter(
      (obj) => obj.date === main_date && obj.movie === urlSegment[1]
    );
    addSeats(data);

    document.getElementById("screen").style.display = "none";
    document.getElementById("chair").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("book_ticket").style.display = "none";
    document.getElementById("back_ticket").style.display = "unset";
    document.getElementById("ticket").style.display = "block";

    let tic = document.createElement("div");
    tic.className = "tic";
    tic.innerHTML = `
        <div class="barcode">
                        <div class="card">
                            <h6>Row ${seat_sr.toLocaleUpperCase()}</h6>
                            <h6>${main_date} December 2024</h6>
                        </div>
                        <div class="card">
                            <h6>Seat ${seat_no}</h6>
                            <h6>21:00</h6>
                        </div>

                        <svg id="${seat_sr}${seat_no}barcode"></svg>
                        <h5>VEGUS CINEMA</h5>
                    </div>
                    <div class="tic_details">
                        <div class="type">4DX</div>
                        <h5 class="pvr"><span>Vegus</span> Cinema</h5>
                        <h1>${urlSegment[1]}</h1>
                        <div class="seat_det">
                            <div class="seat_cr">
                                <h6>ROW</h6>
                                <h6>${seat_sr.toLocaleUpperCase()}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>SEAT</h6>
                                <h6>${seat_no}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>DATE</h6>
                                <h6>${main_date} <sub>Dec</sub></h6>
                            </div>
                            <div class="seat_cr">
                                <h6>TIME</h6>
                                <h6>09:00 <sub>PM</sub></h6>
                            </div>
                        </div>
                    </div>
        `;
        if(urlSegment[1] == "Jawan") {
            tic.querySelector(".tic_details").classList.add("bg_tic_jawan");
          }else{
          tic.querySelector(".tic_details").classList.add("bg_tic_gadar2");

        }

    document.getElementById("ticket").appendChild(tic);

    JsBarcode(
      `#${seat_sr}${seat_no}barcode`,
      `${seat_sr.toLocaleUpperCase()}${seat_no}${seat_price}${main_date}122024`
    );
  });
});

document.getElementById("back_ticket").addEventListener("click", () => {
  document.getElementById("screen").style.display = "inline-block ";
  document.getElementById("chair").style.display = "block";
  document.getElementById("det").style.display = "flex";
  document.getElementById("book_ticket").style.display = "unset ";
  document.getElementById("back_ticket").style.display = "none";
  document.getElementById("ticket").style.display = "none";
});