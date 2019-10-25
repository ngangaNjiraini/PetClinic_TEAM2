function ownersLink() {
    let enter = document.getElementById('ownerButton');
    enter.addEventListener('click', () => window.location.href = './nextpage.html')
}

function bookingLink() {
    let enter = document.getElementById('bookingButton');
    enter.addEventListener('click', () => window.location.href = './nextpage1.html')
}

let searchBar = document.getElementById('searchBar');

searchBar.addEventListener('click', () => window.location.href = './owner.html?lastName=' + searchBar);