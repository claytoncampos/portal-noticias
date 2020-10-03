//http://newsapi.org/v2/top-headlines?apiKey=7d385c56d68f46c99696057ec77891ae&country=br

let containerNoticias = document.getElementById('listaDeNoticias')


  async function getNoticias() {
    let resposta = await fetch('http://newsapi.org/v2/top-headlines?apiKey=7d385c56d68f46c99696057ec77891ae&country=br&category=technology')
    let noticias = await resposta.json();

  for (let i = 0; i < noticias.articles.length; i++) {
    let noticia = noticias.articles[i];

    let cardNoticia = `
        <div class="col-3">
                    <div class="card">
                        <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${noticia.title}</h5>
                        <p class="card-text">${noticia.description}</p>
                        <a href="${noticia.url}" class="btn btn-primary">Ver Noticia</a>
                        </div>
                    </div>
            </div>  
    `;
    containerNoticias.innerHTML += cardNoticia;
  }
}

getNoticias()
 