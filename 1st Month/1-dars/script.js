// const ctx = document.querySelector('#graph');


// getChart();

// async function getChart() {
//     const data = await getData();
// new Chart(ctx, {
//     type: 'polarArea',
//     data: {
//       labels: data.x,
//       datasets: [{
//         label: '# of Votes',
//         data: data.y,
//         borderWidth: 1,
//         backgroundColor:"red",
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });

// }
// async function getData() {
//     const x = [];
//     const y = [];
//     const response = await fetch("ZonAnn.Ts+dSST.csv")
//     const data =  await response.text();
//     const row = data.split("\n").slice(1);
//     row.forEach((item) => {
//         const row = item.split(",");
//         const year = row[0];
//         const index = row[1];
//         x.push(year)
//         y.push(parseFloat(index) + 14)
//     })

//     return {x,y}
// }


let lat = document.querySelector(".lat"),
    lang = document.querySelector(".lang");

let key = "https://api.wheretheiss.at/v1/satellites/25544";

async function getLocation() {
    const response = await  fetch(key)
    const data = await response.json();
    lat.textContent = parseInt(data.latitude);
    lang.textContent = parseInt(data.longitude);
}
  

getLocation()