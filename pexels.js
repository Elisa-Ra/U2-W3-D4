// PULSANTE LOAD IMAGES PER CARICARE L'API NELLA PAGINA
const load_button = document.getElementById("load-img")

load_button.addEventListener("click", () => {
  const API_KEY = "1CG6iwBWa9AI95AuZFzWXC0V7iBskPQCKlbL0bpQnMBvwwK53s9Ffcep"
  const pexels_site = "https://api.pexels.com/v1/search?query=hamsters"

  fetch(pexels_site, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(res.status)
      }
    })
    .then((data) => {
      const cards = document.querySelectorAll(".card")
      data.photos.forEach((photo, index) => {
        if (cards[index]) {
          const img = cards[index].querySelector("img")
          const title = cards[index].querySelector(".card-title")
          const text = cards[index].querySelector(".card-text")
          const id_img = cards[index].querySelector(".text-muted")

          const detailUrl = `dettaglio.html?id=${photo.id}`

          // IMMAGINE → crea link attorno all'immagine
          const imgLink = document.createElement("a")
          imgLink.href = detailUrl
          imgLink.appendChild(img.cloneNode(true))
          img.replaceWith(imgLink)

          // TITOLO → crea link attorno al nome del fotografo
          title.textContent = "" // svuota il titolo
          const titleLink = document.createElement("a")
          titleLink.href = detailUrl
          titleLink.className = "text-decoration-none"
          titleLink.textContent = photo.photographer
          title.appendChild(titleLink)

          text.textContent = photo.alt || "Foto da Pexels"
          id_img.textContent = photo.id
        }
      })
    })
    .catch((error) => {
      console.error("Errore nel caricamento:", error)
    })
})

// PULSANTE LOAD SECONDARY IMAGES PER CARICARE L'ALTRA API NELLA PAGINA
const load_secondary_button = document.getElementById("load-secondary-img")

load_secondary_button.addEventListener("click", () => {
  const API_KEY = "1CG6iwBWa9AI95AuZFzWXC0V7iBskPQCKlbL0bpQnMBvwwK53s9Ffcep"
  const pexels_site = "https://api.pexels.com/v1/search?query=tigers"

  fetch(pexels_site, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(res.status)
      }
    })
    .then((data) => {
      const cards = document.querySelectorAll(".card")
      data.photos.forEach((photo, index) => {
        if (cards[index]) {
          const img = cards[index].querySelector("img")
          const title = cards[index].querySelector(".card-title")
          const text = cards[index].querySelector(".card-text")
          const id_img = cards[index].querySelector(".text-muted")

          const detailUrl = `dettaglio.html?id=${photo.id}`

          // IMMAGINE → crea link attorno all'immagine
          const imgLink = document.createElement("a")
          imgLink.href = detailUrl
          imgLink.appendChild(img.cloneNode(true))
          img.replaceWith(imgLink)

          // TITOLO → crea link attorno al nome del fotografo
          title.textContent = "" // svuota il titolo
          const titleLink = document.createElement("a")
          titleLink.href = detailUrl
          titleLink.className = "text-decoration-none"
          titleLink.textContent = photo.photographer
          title.appendChild(titleLink)

          text.textContent = photo.alt || "Foto da Pexels"
          id_img.textContent = photo.id
        }
      })
    })
    .catch((error) => {
      console.error("Errore nel caricamento:", error)
    })
})

// TASTO HIDE PER FARE SCOMPARIRE L'INTERA CARD

document.addEventListener("DOMContentLoaded", () => {
  const editButtons = document.querySelectorAll(".btn_hide")

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

// PULSANTE SEARCH

const search_btn = document.getElementById("btn_search")

const form = document.getElementById("search-form")
const input = document.getElementById("search")
const API_KEY = "1CG6iwBWa9AI95AuZFzWXC0V7iBskPQCKlbL0bpQnMBvwwK53s9Ffcep"

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const query = input.value.trim()
  if (!query) return

  const pexels_site = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}`

  fetch(pexels_site, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.status)
      return res.json()
    })
    .then((data) => {
      const cards = document.querySelectorAll(".card")
      data.photos.forEach((photo, index) => {
        if (cards[index]) {
          const img = cards[index].querySelector("img")
          const title = cards[index].querySelector(".card-title")
          const text = cards[index].querySelector(".card-text")
          const id_img = cards[index].querySelector(".text-muted")

          const detailUrl = `dettaglio.html?id=${photo.id}`

          // IMMAGINE → crea link attorno all'immagine
          const imgLink = document.createElement("a")
          imgLink.href = detailUrl
          imgLink.appendChild(img.cloneNode(true))
          img.replaceWith(imgLink)

          // TITOLO → crea link attorno al nome del fotografo
          title.textContent = "" // svuota il titolo
          const titleLink = document.createElement("a")
          titleLink.href = detailUrl
          titleLink.className = "text-decoration-none"
          titleLink.textContent = photo.photographer
          title.appendChild(titleLink)

          text.textContent = photo.alt || "Foto da Pexels"
          id_img.textContent = photo.id
        }
      })
    })
    .catch((error) => {
      console.error("Errore nel caricamento:", error)
    })
})
