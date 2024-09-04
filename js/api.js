function getCharacter(done) {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => done(data))
      .catch(error => console.error("Error al obtener los personajes:", error));
  }
  
  getCharacter(data => {
    data.results.map(personaje => {
      const article = document.createRange().createContextualFragment(`
        <article>
          <div class="image-container">
            <img src="${personaje.image}" alt="Personaje">
          </div>
          <h2>${personaje.name}</h2>
          <span>${personaje.status}</span>
        </article>
      `);
      const main = document.querySelector("main");
      main.append(article);
    });
  });