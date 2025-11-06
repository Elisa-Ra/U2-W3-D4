const API_KEY = "1CG6iwBWa9AI95AuZFzWXC0V7iBskPQCKlbL0bpQnMBvwwK53s9Ffcep"

const params = new URLSearchParams(window.location.search)
const photoId = params.get("id")

const container = document.getElementById("dettaglio")

if (!photoId) {
  const errorMsg = document.createElement("p")
  errorMsg.className = "text-danger"
  errorMsg.textContent = "ID immagine non trovato."
  container.appendChild(errorMsg)
} else {
  fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.status)
      return res.json()
    })
    .then((photo) => {
      const img = document.createElement("img")
      img.src = photo.src.large
      img.alt = photo.alt
      img.className = "img-fluid rounded mb-4"

      const title = document.createElement("h2")
      title.textContent = photo.photographer

      const link = document.createElement("a")
      link.href = photo.photographer_url
      link.target = "_blank"
      link.className = "btn btn-outline-success"
      link.textContent = "Pagina dell'artista"

      const linkWrapper = document.createElement("p")
      linkWrapper.appendChild(link)

      container.appendChild(img)
      container.appendChild(title)
      container.appendChild(linkWrapper)
    })
    .catch((error) => {
      const errorMsg = document.createElement("p")
      errorMsg.className = "text-danger"
      errorMsg.textContent = `Errore: ${error.message}`
      container.appendChild(errorMsg)
    })
}
