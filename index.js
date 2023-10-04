function createCountryCard(country) {
  const card = document.getElementById("countryCard")

  const countryName = document.createElement("h2")
  countryName.textContent = country.name.common

  const flagImg = document.createElement("img")
  flagImg.src = country.flags.svg
  flagImg.alt = "Country Flag"

  card.innerHTML = ""
  card.append(countryName, flagImg)
}

async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const countries = await response.json()

    const randomIndex = Math.floor(Math.random() * countries.length)
    createCountryCard(countries[randomIndex])
  } catch(error) {
    console.error("Erro ao obter dados do país", error)
  }
}

getCountries()