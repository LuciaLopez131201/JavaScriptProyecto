const playlist =[];

console.log(playlist)

function AddSong() {
    console.log("adding song...")
    const title= prompt ("Enter song title:")
    const artist=prompt ("Enter song duration:")
    const duration= Number(prompt("Enter duration (in seconds)"));
    
    if(title && artist && !isNaN(duration)){
        playlist.push({titulo: title, artista: artist, duracion: duration})
    }
}

AddSong();
console.log(playlist)
