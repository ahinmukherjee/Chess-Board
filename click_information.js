 // clicked aneyone squers then show me her perticular information

 const allSquers = document.getElementsByClassName("box-chess");
 //console.log((allSquers));

 const clickedElements= [];

 for( const i of allSquers){
    i.addEventListener('click',function() {
        //console.log(i);
    // push elements in array

       //  clickedElements.push(i);
       console.log(clickedElements); 
       
       const idOfElement = i.getAttribute("id");
       console.log(idOfElement);
       const innerHTMLOfElement= document.getElementById(idOfElement).innerHTML;
      // console.log(innerHTMLOfElement);
      //console.log(i);

       if(clickedElements.length > 0){

          clickedElements[0].removeAttribute("style");
          clickedElements.length= 0;
       }
       console.log(i);
      
        if (innerHTMLOfElement.includes("black")||
            innerHTMLOfElement.includes("white")) {

           document.getElementById(idOfElement).style.backgroundColor ="yellow";
           clickedElements.push(i);
           
        }
    });
        
 }