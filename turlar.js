// jshint ignore: start

const turs = document.querySelector('.travel-card-container')
const locations = [{
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80",
    title: "Arizona",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    lists: [
      "&#9992; Gidiş dönüş dahil",
      "&#128719; 3 Gün 2 Gece",
      "&#127860; Tam Pansiyon"
    ],
    price: "13.200 ₺",
    stars: "&starf;&starf;&starf;&starf;&starf;"
  },
  {
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Bali",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    lists: [
      "&#9992; Gidiş dönüş dahil",
      "&#128719; 3 Gün 2 Gece",
      "&#127860; Tam Pansiyon"
    ],
    price: "13.200 ₺",
    stars: "&starf;&starf;&starf;&starf;&star;"
  },
  {
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Kapadokya",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    lists: [
      "&#9992; Gidiş dönüş dahil",
      "&#128719; 2 Gün 1 Gece",
      "&#127860; Tam Pansiyon"
    ],
    price: "13.200 ₺",
    stars: "&starf;&starf;&starf;&starf;&star;"
  },
  {
    image: "https://images.unsplash.com/photo-1544085311-11a028465b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    title: "Norveç",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    lists: [
      "&#9992; Gidiş dönüş dahil",
      "&#128719; 2 Gün 1 Gece",
      "&#127860; Tam Pansiyon"
    ],
    price: "13.200 ₺",
    stars: "&starf;&starf;&starf;&starf;&star;"
  },
  {
    image: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    title: "Dubai",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    lists: [
      "&#9992; Tek Yön",
      "&#128719; ~ Gün",
      "&#127860; Simit"
    ],
    price: "133.200 ₺",
    stars: "&starf;&star;&star;&star;&star;"
  },
  {
    image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    title: "Venedik",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    lists: [
      "&#9992; Gidiş dönüş dahil",
      "&#128719; 3 Gün 2 Gece",
      "&#127860; Tam Pansiyon"
    ],
    price: "83.200 ₺",
    stars: "&starf;&starf;&starf;&star;&star;"
  },
  {
    image: "https://images.unsplash.com/photo-1446160657592-4782fb76fb99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    title: "San Fransisko",
    content: "Sen öyle San Fransisko: text to build on the card title and make up the bulk of the card's content.",
    lists: [
      "&#9992; Gidiş dönüş dahil",
      "&#128719; 3 Gün 2 Gece",
      "&#127860; Tam Pansiyon"
    ],
    price: "23.200 ₺",
    stars: "&starf;&starf;&starf;&star;&star;"
  },
  {
    image: "https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    title: "Güzel Bir Yer",
    content: "Seçimi bize bırakın sizi güzel bir yerde ağırlıyalım. Beğenmezseniz paranız iade değil! Riks budur!",
    lists: [
      "&#9992; Belli olmaz",
      "&#128719; Belli değil",
      "&#127860; Kısmet, aç kalmazsınız ama..."
    ],
    price: "1.200 ₺",
    stars: "&starf;&starf;&starf;&starf;&starf;"
  },
  {
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    title: "İsveç",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    lists: [
      "&#9992; Gidiş dönüş dahil",
      "&#128719; 3 Gün 2 Gece",
      "&#127860; Tam Pansiyon"
    ],
    price: "12.200 ₺",
    stars: "&starf;&starf;&starf;&starf;&starf;"
  },
  {
    image: "https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80",
    title: "Kara yipler",
    content: "Onlar da kimler? build on the card title and make up the bulk of the card's content.",
    lists: [
      "&#9992; Gidiş dönüş dahil",
      "&#128719; 3 Gün 2 Gece",
      "&#127860; Tam Pansiyon"
    ],
    price: "12.200 ₺",
    stars: "&starf;&starf;&starf;&starf;&starf;"
  },
  {
    image: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1410&q=80",
    title: "Yunanistan",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    lists: [
      "&#9992; Gidiş dönüş dahil",
      "&#128719; 3 Gün 2 Gece",
      "&#127860; Tam Pansiyon"
    ],
    price: "12.200 ₺",
    stars: "&starf;&starf;&starf;&starf;&starf;"
  },
  {
    image: "https://images.unsplash.com/photo-1534777367038-9404f45b869a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Hindistan",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    lists: [
      "&#9992; Gidiş dönüş dahil",
      "&#128719; 3 Gün 2 Gece",
      "&#127860; Tam Pansiyon"
    ],
    price: "32.200 ₺",
    stars: "&starf;&starf;&starf;&starf;&starf;"
  }
]

function turAra(query) {
  const qry = query.toLowerCase()
  return found = locations.filter(location => location.title.toLowerCase().includes(qry) || location.content.toLowerCase().includes(qry) || location.lists.some(list => list.toLowerCase().includes(qry)));
}

function cardGenerator(locations, cardNr) {
  cardNr ??= locations.length;
  cardNr = (cardNr > locations.length) ? locations.length : cardNr;
  for (let index = 0; index < cardNr; index++) {
    const { image, title, content, lists, price, stars} = locations[index];
    turs.innerHTML += `
      <div class="col-xxl-3 col-lg-4 col-md-6 col-10 offset-md-0 offset-1 mt-5">
        <div class="card card-travel" data-text="${price}" data-star="${stars}">
          <img src="${image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title my-3">${title}</h5>
            <p class="card-text">${content}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${lists[0]}</li>
            <li class="list-group-item">${lists[1]}</li>
            <li class="list-group-item">${lists[2]}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link btn btn-warning">Rezervasyon yap</a>
            <a href="#" class="card-link btn btn-warning"><i class="bi bi-search"></i></a>
          </div>
        </div>
      </div>
    `
  }
}

function getQueryObject(queryString)  {
  if (!(queryString.includes('?') && queryString.includes('q=')))
    return { q: false }
  const robj = {}
  const queries = queryString.slice(1).split('&');
  queries.forEach(query => { robj[query.split('=')[0]] = decodeURI(query.split('=')[1]).replace( /\+/g, ' ').replace( /\%2B/g, '+') })
  return robj
}

window.addEventListener('load', () => {
  const turBilgisiEl = document.querySelector('#turlar-listesi-baslik')
  const { q } = getQueryObject(document.location.search)
  if (!q) {
    const baslik = document.createElement('h2')
    baslik.classList.add('sub-title')
    baslik.innerText = 'Tüm Turlarımız'
    turBilgisiEl.appendChild(baslik)
    cardGenerator(locations);
  } else {
    const turlar = turAra(q);
    const baslik = document.createElement('h2')
    baslik.classList.add('sub-title')
    baslik.innerText = `\"${q}\" için ${turlar.length} sonuc bulundu...`
    const tumlink = document.createElement('a')
    tumlink.href = 'tumturlar.html'
    tumlink.innerText = 'tüm turlar için tıklayınız...'
    tumlink.classList.add('btn','btn-warning')
    turBilgisiEl.appendChild(baslik)
    turBilgisiEl.appendChild(tumlink)
    cardGenerator(turlar)
  }
})