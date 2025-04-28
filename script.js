function getLyrics() {
    const artist = document.getElementById('artist').value;
    const title = document.getElementById('title').value;
    const lyricsDiv = document.getElementById('lyrics');
  
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then(response => response.json())
      .then(data => {
        if (data.lyrics) {
          lyricsDiv.innerText = data.lyrics;
        } else {
          lyricsDiv.innerText = 'Lyrics not found!';
        }
      })
      .catch(error => {
        lyricsDiv.innerText = 'An error occurred while fetching lyrics.';
        console.error(error);
      });
  }
  