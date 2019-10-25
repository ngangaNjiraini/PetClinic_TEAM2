
let main = document.getElementById("main");
window.onload = search();


function search() {
    fetch("http://localhost:9966/petclinic/api/owners")
        .then(res => res.json())
        .then(json => printLists(json))
        .catch(err => console.error(err));
}

function printLists(Get) {
    Get.forEach(o => {
        let owners = document.createElement("card");

        owners.addEventListener('click', () => window.location.href = './owner.html?id=' + o.id);
        owners.className = "card border-dark mb-3 w-25";
        let title = document.createElement('h3');
        title.className = "card-header list-group-item-primary";
        title.innerText = o.firstName + " " + o.lastName;
        let detail = document.createElement('p');
        detail.innerText = o.address + "\n" + o.city + "\n" + o.telephone + "\n"; 
        detail.className = "card-text";
        owners.appendChild(title);
        owners.appendChild(detail);
        main.appendChild(owners);
    })
}