//Question 1: For a given JSON iterate over all for loops


//for loop

let obj1 ={
    "name":"sam",
    "age":"18",
    "student":"yes"
    }
    
      let array = Object.keys(obj1)
        
      for(let i = 0; i < array.length; i++){
        let key = array[i];
        let value = obj1[key];
        console.log(`${key} : ${value}`);
      }


//for ... in loop

let obj = {
    "name": "jason",
    "age": "22",
    "occupation":"teacher",
    "place":"India"
  }
  
  for(let property in obj){
    console.log(`${property}: ${obj[property]}`);
  }
  

  //for... of loop

  let stuDetails = {
    "Name":"Rayon",
    "class":"Batch21",
    "year":"2023",
    "Depart":"Computer"
  };

  //convert json keys into array 
    let arr = Object.keys(stuDetails);

    
  for(let key of arr){
    let display = stuDetails[key];
    console.log(`${key} :  ${display}`);
    }



    //for ... each loop
    let data = {
        "name": "steven",
        "age": "16",
        "student": "no"
      };
      
      let arr1 = Object.keys(data);
      
      arr1.forEach(key => {
        let value = data[key];
         console.log(`${key}  ${value}`)});