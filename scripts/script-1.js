console.log('script linked');

var all = document.getElementById("btnAll");
all.addEventListener('click', function () {
    removeData();
    showData();

});


function removeData() {
    document.querySelector('ul.myPeople').innerHTML = '';
};

function showData() {
    fetch("people.json")
        .then(res => res.json()
            .then(data => {
                console.log(data);
                data.forEach(element => {
                    let person = document.createElement('LI');
                    person.innerHTML = `Name: ${element.name} <br>
                                    Age: ${element.age}<br>
                                    City: ${element.city}<br>
                                    Relation: ${element.relation}<br>
                                    -`;
                    let list = document.getElementsByClassName('myPeople')[0];
                    list.appendChild(person);
                })
            }));
};
function fetchPersons() {
    fetch("people.json")
        .then(res => res.json()
            .then(data => {
                console.log(data);
            })
        )
};
