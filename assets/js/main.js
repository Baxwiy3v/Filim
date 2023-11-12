
var row=document.getElementsByClassName("row")[0]

function fillHtml(data){

  function randomShows(shows, limit) {

    let selected = []

    let result = []
   
    while (selected.length < limit) {
     
      let index = Math.floor(Math.random() * shows.length)
 
      if (!selected.includes(index)) {
      
        selected.push(index)
      
        result.push(shows[index])
      }
    }
   
    return result
  }


  let shows = data

  let random = randomShows(shows, 12)
 
  random.forEach(element => {
    row.innerHTML+=
    `
    <div class="card col-3" style="width: 18rem;">
          <img src="${element.image.medium}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text"> ${element.runtime} </p>
            <a href="details.html?id=${element.id}" class="btn btn-primary">Check</a>
          </div>
        </div>
        `
  });
}

fetch("https://api.tvmaze.com/shows").then(response=>response.json()).then(data=>fillHtml(data))