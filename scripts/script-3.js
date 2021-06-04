console.log('Script-3 linked')

function store() {
    let storeFName = document.getElementById('fName').value;
    localStorage.setItem('name', storeFName);
    console.log(storeFName);

    let storeLName = document.getElementById('lName').value;
    localStorage.setItem('name', storeLName);
    console.log(storeLName);

    let storeAge = document.getElementById('age').value;
    localStorage.setItem('name', storeAge);
    console.log(storeAge);

    let storeEmail = document.getElementById('email').value;
    localStorage.setItem('name', storeEmail);
    console.log(storeEmail);

    let storeCity = document.getElementById('city').value;
    localStorage.setItem('name', storeCity);
    console.log(storeCity);

    let storeAdress = document.getElementById('adress').value;
    localStorage.setItem('name', storeAdress);
    console.log(storeAdress);
}
function remove() {
    localStorage.removeItem('storeFName');
    localStorage.removeItem('storeLName')
    localStorage.removeItem('storeAge')
    localStorage.removeItem('storeEmail')
    localStorage.removeItem('storeCity')
    localStorage.removeItem('storeAdress')
    console.log('removed from local storage')
}
