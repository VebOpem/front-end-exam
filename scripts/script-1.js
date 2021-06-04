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
/*
});
function remove() {
    document.querySelector('ul#myPeople').innerHTML = '';
}
function showData() {
    fetch("json/people.json")
        .then(res => res.json()
            .then(data => {
                console.log(data);
                data.forEach(element => {
                    let person = document.createElement('LI');
                    person.innerHTML = `Name: ${element.name} <br>
                                        Age: ${element.age}<br>
                                        City: ${element.city}<br>
                                        Relation: ${element.relation}<br>
                                        --`;
                    let list = document.getElementsByClassName('myPeopl')[0];
                    list.appendChild(person);
                })
            }));
};

all.addEventListener('click', function () {
    //Remove all content in ul class="studenter"
    document.querySelector("ul.studenter")
        .innerHTML = "";
    //Fetch the JSON file
    fetch('studenter.json')
        .then(res => res.json()
            .then(data => {
                console.log(data);
                //filling the ul with LI elements
                data.forEach(element => {
                    let student = document.createElement("LI");
                    student.innerHTML = `Fornavn: ${element.fornavn} <br>
                                     Etternavn: ${element.etternavn} <br>
                                     Studieprogram: ${element.studieprogram} <br>
                                     Forkortelse: ${element.forkortelse} <br> ----`;
                    let list = document.getElementsByClassName("studenter")[0];
                    list.appendChild(student);
                });
            })
        );
});*/