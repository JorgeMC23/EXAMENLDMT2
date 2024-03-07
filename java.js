const characterList = document.querySelector('.character-list');

const fetchData = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data;
}

const renderCharacters = (characters) => {
  characterList.innerHTML = '';
  characters.forEach(character => {
    const characterCard = document.createElement('li');
    characterCard.classList.add('character-card');
    characterCard.innerHTML = `
      <img class="character-img" src="${character.image}" alt="${character.name}">
      <div class="character-content">
        <h2 class="character-name">${character.name}</h2>
        <div class="character-status">Status: ${character.status}</div>
        <div class="character-species">Species: ${character.species}</div>
      </div>
    `;
    characterList.appendChild(characterCard);
  });
}

fetchData().then(renderCharacters);