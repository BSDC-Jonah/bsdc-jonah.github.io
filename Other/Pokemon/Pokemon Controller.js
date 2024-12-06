console.log('hi')

function insertImage(img, imgid="noid") { //Imgid param receives ID OR if none provided applies "noid"
    if (img == null) {stop(); console.error('Img not defined')}
    else {
        const cont = document.getElementById('container');
        const image = document.createElement('img');
        image.src = img;
        image.id = imgid; // Receives ID and sets 
        cont.appendChild(image);
    }
}

for (let index=0; index<200; index++) {
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const form = `${url}${index}.png`;
    const newID = `TagIMG-${index}`; // Constructor for ID 
    insertImage(form, newID); // Calls function and sends ID
}