enum electronics{
    mobile,
    ipad,
    laptop,
    btspeakers,
    tv,
    fridge="lg",
    airconditioner="daikin"

}
console.log(electronics);

//reverse mapping
enum Weekend {  
    Friday = 1,  
    Saturday,  
    Sunday  
  }  
  console.log(Weekend.Saturday);     
  console.log(Weekend["Saturday"]);    
  console.log(Weekend[3]); 

  enum Week {  
    monday = 1,  
    tuesday = getDate('Dominoz'),  
    wednesday = tuesday * 40  
  }  
    
  function getDate(day : string): number {  
      if (day === 'Dominoz') {  
          return 3;  
      }  
  }  
  console.log(Week.tuesday);   
  console.log(Week.wednesday);  

  enum weeks{
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}

const getDay = () => 7;  
const today = getDay();  
 
console.log(weeks[today]);