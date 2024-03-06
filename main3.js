function greet(getTime) {
    var name = "John";
    var getDay = new Date();
    var getTime = getDay.getHours();
    if (getTime < 12){
        console.log("Good Morning " + name);
    } else {
        console.log("Good Afternoon " + name);
    
       
    }
    }  
greet(12);  