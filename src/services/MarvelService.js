class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=cef4ca280c017af33d54c13d2c9b6a99';
  getResurse = async (url) => {
    let result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }
    return result.json();
  };

  getAllCharacters = () => {
    return this.getResurse(
      `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
    );
  };

  getCharacter = (id) => {
    return this.getResurse(`${this._apiBase}characters/${id}?${this._apiKey}`);
  };
}

export default MarvelService;
