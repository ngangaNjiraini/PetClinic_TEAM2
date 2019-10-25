let owners = document.getElementById("owners");


fetch("http://localhost:9966/petclinic/api/owners")
    .then(res => res.json())
    .then(json => output(json))
    .catch(err => console.log(err));




function output(data) {
for(let owner of data.){
let card = doceument.createElement('div');
//card.addEventListener('click', )
card.className = "card";

}




    owners.appendChild(data);
}