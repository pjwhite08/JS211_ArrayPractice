console.log("loading main.js")

//what fetch returns is a promise, not a payload; asynchronous; this is NOT the result, itself, it's more like an agreement

// let fetchPromise = fetch("https://randomuser.me/api/"); 

// //once this request is made, the result of it is available:

// let jsonPromise = fetchPromise.then(function(response){
//     //do something with the result, response
//     //unpack that response; extract the json from the response
//     //this response has the header information: where is it from, how big is it'; the stuff we see under Network --> Headers
//     return response.json();
// })

// //once you have the json promise
// jsonPromise.then(function(json){
//     //do something with the json payload
// })

//fetch is the library that the broswer uses
//axios is the library that node uses
//which we boil down to:
fetch("https://randomuser.me/api/?results=10")
.then(function(response){
    //do something with the result, response
    //unpack that response; extract the json from the response
    //this response has the header information: where is it from, how big is it'; the stuff we see under Network --> Headers
    console.log("response status", response.status)
    return response.json();
}).then(function(json){
    console.log("response payload:", json)
    //do something with the json payload
    processJson(json)
})
// .catch(function(error){
//     console.log("ran into an error", error)
//     document.getElementById('error').innerText = "something went wrong"
// })



//await (which we will not talk about) is like stop the world and wait for the package; like the kiddos I work with
//turn something that's meant to be ansynchronous into a block system(?) that is synchronous

//move on 
let processContact = function(contact) {
    
    let fullName = `${contact.name.last}, ${contact.name.first}`;
    console.log(`Name Last, First: ${fullName}`)
    let pic = contact.picture.thumbnail;
    let email = contact.email;
    let streetAddress = `${contact.location.street.number} ${contact.location.street.name}`;
    let cityState = `${contact.location.city} ${contact.location.state} ${contact.location.postcode}`;
    let country = contact.location.country;

    //add the minimal contact to the UL as an LI
    let li = document.createElement("li")
    document.getElementById('ul').appendChild(li);
    let div = document.createElement("div")
    li.appendChild(div)
    let nameP = document.createElement("p")
    nameP.classList.add("name")
    nameP.innerText = fullName
    div.appendChild(nameP)

    

    let divTwo = document.createElement("div")
    li.appendChild(divTwo)
    
    picImg = document.createElement("img")
    picImg.classList.add("pic")
    picImg.src = pic
    divTwo.appendChild(picImg)


    emailP = document.createElement("p")
    emailP.classList.add("email")
    emailP.innerText = email
    divTwo.appendChild(emailP)

    streetP = document.createElement("p")
    streetP.classList.add("street")
    streetP.innerText = streetAddress
    divTwo.appendChild(streetP)

    cityStateP = document.createElement("p")
    cityStateP.classList.add("cityState")
    cityStateP.innerText = cityState
    divTwo.appendChild(cityStateP)

    countryP = document.createElement("p")
    countryP.classList.add("country")
    countryP.innerText = country
    divTwo.appendChild(countryP)

    divTwo.className = "noDisplay"

    let showing = false
    
//add an event listener to the LI to show additional extra information
    li.addEventListener("click", function(){
        // divTwo.classList.toggle("noDisplay")

        if (showing == false){
            divTwo.className = "display"
            showing = true
        }
        else {
           divTwo.className = "noDisplay"
            showing = false
        }
            

        

        //need to make sure this only happens once

    })
    //onClick do all this:
    //
}

processJson = function(json) {
    //print the first name of the person
    console.log(json.results[0].name.first)
    //loop throught the results array
    for (let i=0; i< json.results.length; i++ ) {
        console.log(json.results[i].name.first)
        let contact = json.results[i]
        processContact(contact);
    }

    //process one contact at a time and update the dom with the contacts info
   
//to turn in: list of my people in my address book
//make a UL with LIs (see e.g.)
//some information is there
//click or hover and more information is there

}