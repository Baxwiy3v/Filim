

  var div = document.getElementById("details")
  let id = window.location.search.slice(4)

  axios.get(`https://api.tvmaze.com/shows/${id}`).then((response) => {
    div.innerHTML = `
      <div class="card">
        <img src="${response.data.image.medium}" alt="${response.data.name}" class="card-image">
        <h1 class="card-title">${response.data.name}</h1>
        <div class="card-info">
          <span>Rating: ${response.data.rating.average}</span>
          <span>Premiered: ${response.data.premiered}</span>
          <span>Ended: ${response.data.ended}</span>
          <span>Status: ${response.data.status}</span>
          <span>Country: ${response.data.network.country.name}</span>
          <span>Genres: ${response.data.genres}</span>
        </div>
        <p class="card-summary">${response.data.summary}</p>
      </div>
    `
  })
