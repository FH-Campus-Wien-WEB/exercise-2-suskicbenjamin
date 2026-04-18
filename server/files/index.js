window.onload = function () {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    const bodyElement = document.querySelector("body");

    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);

      for (const movie of movies) {

        const article = document.createElement("article");
        article.id = movie.imdbID;

        // Poster
        const poster = document.createElement("img");
        poster.src = movie.poster;
        poster.alt = movie.title;

        // Container for text content
        const content = document.createElement("div");

        // Title
        const title = document.createElement("h2");
        title.textContent = movie.title;

        // Plot
        const plot = document.createElement("p");
        plot.textContent = movie.plot;

        // Details
        const details = document.createElement("p");
        details.textContent =
          "Released: " + movie.released +
          " | Runtime: " + movie.runtime + " min" +
          " | Genres: " + movie.genres.join(", ") +
          " | IMDb: " + movie.imdbRating +
          " | Metascore: " + movie.metascore;

        // Directors
        const directorsTitle = document.createElement("h3");
        directorsTitle.textContent = "Directors";

        const directorsList = document.createElement("ul");
        movie.directors.forEach(director => {
          const li = document.createElement("li");
          li.textContent = director;
          directorsList.appendChild(li);
        });

        // Writers
        const writersTitle = document.createElement("h3");
        writersTitle.textContent = "Writers";

        const writersList = document.createElement("ul");
        movie.writers.forEach(writer => {
          const li = document.createElement("li");
          li.textContent = writer;
          writersList.appendChild(li);
        });

        // Actors
        const actorsTitle = document.createElement("h3");
        actorsTitle.textContent = "Actors";

        const actorsList = document.createElement("ul");
        movie.actors.forEach(actor => {
          const li = document.createElement("li");
          li.textContent = actor;
          actorsList.appendChild(li);
        });

        // Edit Button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.onclick = function () {
          location.href = "edit.html?imdbID=" + movie.imdbID;
        };

        // Build structure
        content.appendChild(title);
        content.appendChild(plot);
        content.appendChild(details);
        content.appendChild(directorsTitle);
        content.appendChild(directorsList);
        content.appendChild(writersTitle);
        content.appendChild(writersList);
        content.appendChild(actorsTitle);
        content.appendChild(actorsList);
        content.appendChild(editButton);

        article.appendChild(poster);
        article.appendChild(content);

        bodyElement.appendChild(article);
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
        xhr.status +
        " - " +
        xhr.statusText
      );
    }
  };

  xhr.open("GET", "/movies");
  xhr.send();
};