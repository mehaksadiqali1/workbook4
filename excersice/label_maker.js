"use strict"
let myInfo = { 
    name: "Pursalane Faye",  
    address: "121 Main Street", 
    city : "Brooklyn",
    state : "NY",
    zipCode : "7272",
    
};

    function printPerson(myInfo) {
        let mailingLabel= `
        ${myInfo.name}  
        ${myInfo.address} 
        ${myInfo.city}  
        ${myInfo.state} 
        ${myInfo.zipCode}  `
        console.log(mailingLabel)
    };
    printPerson(myInfo)