const pexelsKey = "1CG6iwBWa9AI95AuZFzWXC0V7iBskPQCKlbL0bpQnMBvwwK53s9Ffcep"
const pexelsURL = "https://api.pexels.com/v1/search?query="

const loadImages = function (searchquery) {
  console.log("CLICCATO BOTTONE PRIMARIO")
  fetch(pexelsURL + searchquery, {
    method: "GET", // è sottointeso
    headers: {
      authorization: pexelsKey,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(res.status)
      }
    })
    .then((pexelsData) => {
      console.log("DATI PEXELS", pexelsData)
      //   trovo tutti i cani
      const allTheDogs = document.querySelectorAll(".card img")
      const allTheSmalls = document.querySelectorAll(".card small")
      const allTheTitle = document.querySelectorAll(".card-title")
      const allTheText = document.querySelectorAll(".card-text")

      console.log(allTheDogs)
      for (let i = 0; i < allTheDogs.length; i++) {
        // i è l'indice
        // allTheDogs[i] è il tag img
        allTheDogs[i].setAttribute("src", pexelsData.photos[i].src.tiny)
        allTheSmalls[i].innerText = "ID: " + pexelsData.photos[i].id
        allTheTitle[i].innerText = pexelsData.photos[i].photographer
        allTheText[i].innerText = pexelsData.photos[i].alt
      }
    })
    .catch((err) => {
      console.log("ERROREEEE", err)
    })
}
// SEARCH BAR
document.getElementById("custom-search").addEventListener("submit", (e) => {
  e.preventDefault()
  const searchedWord = document.getElementById("search").value // valore dell'input
  console.log("parola cercata", searchedWord)
  loadImages(searchedWord)
})

// TASTO HIDE PER FARE SCOMPARIRE L'INTERA CARD

document.addEventListener("DOMContentLoaded", () => {
  const editButtons = document.querySelectorAll(".hide")

  editButtons.forEach((button) => {
    button.textContent = "Hide"

    button.addEventListener("click", () => {
      const card = button.closest(".card")
      if (card) {
        card.style.display = "none"
      }
    })
  })
})
