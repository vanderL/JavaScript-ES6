var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for (let i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);

    if (videoGames[i] === 'PS4') {
        break;
    }
}

videoGames.forEach(item => {
    console.log(`O brasil ganhou a copa de ${item}`)
})