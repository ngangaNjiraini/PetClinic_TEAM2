const id = new URLSearchParams(window.location.search).get('id');
window.onload = search();
let main = document.getElementById('main');

function search() {
    fetch("http://localhost:9966/petclinic/api/owners/" + id)
        .then(res => res.json())
        .then(json => printDetails(json))
        .catch(err => console.error(err));
        
}

function printDetails(json) {
console.log(json);
    let title = document.createElement('h3');
    title.className = "card-header";

    main.appendChild(title);

    let ownerID = document.getElementById("ownerID");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let telephone = document.getElementById("telephone");

    ownerID.innerText = "ID: " + json.id;
    firstName.innerText = " First Name: " + json.firstName;
    lastName.innerText = " Last Name: " + json.lastName;
    address.innerText = " Address: " + json.address;
    city.innerText = " City: " + json.city;
    telephone.innerText = " Telephone: " + json.telephone;
    searchPets();
}

function searchPets() {
    fetch("http://localhost:9966/petclinic/api/owners/" + id)
        .then(res => res.json())
        .then(json => printPets(json.pets[0]))
        .catch(err => console.error(err));

    //printPets();
}

function printPets(json) {

        let petCard = document.getElementById("pets");
        let petName = document.createElement('h3');
        let petDetail = document.createElement('p');
        
    console.log(json.name);

        petCard.className = "card-text";
        petName.innerText = " Name: " + json.name;
        petDetail.className = "card-text";
        petCard.addEventListener('click', () => window.location.href = './pets.html?id=' + petList.id);

        petCard.appendChild(petName);
        petCard.appendChild(petDetail);
}




