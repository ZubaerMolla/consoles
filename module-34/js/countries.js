const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => console.log(data));
}

loadCountries();

const displayCountries = countries => {
    // for(const country of countries)
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country)
        const div = createElement('div')
        const h3 = document.createElement('h3');
        h3.innerText = country.name
        div.appendChild(h3)
        const p = document.createElement('p');
        div.appendChild(p)
        countriesDiv.appendChild(div)
    });
}