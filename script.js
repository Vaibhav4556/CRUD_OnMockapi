let url = "https://62a85a68943591102b9fcc6e.mockapi.io/users"
    // to read the data craete a function

function getData() {
    fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },

        }).then((result) => result.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error);
        })
}

// getData();

// TO SEND THE DATA :- POST
// CREATE A FUNCTION 

function createData() {
    let data = {
        name: "pjnv95",
        email: "pj@nv.in"
    };
    fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        }).then((result) => result.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error);
        })
}

//createData()
getData()


// UPDATION OF THE DATA

function updateData() {
    let data = {
        name: "pjnv89999",
        email: "jnbv@yuuu.li"
    }
    fetch(url + "/17", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },

        }).then((result) => result.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error);
        })
}

//updateData()

//TO DELETE THE DATA 

function delData() {
    fetch(url + "/21", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        }).then((result) => result.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error);
        })
}

delData()
getData();