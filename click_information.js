 // clicked aneyone squers then show me her perticular information

 const allSquers = document.getElementsByClassName("box-chess")
 //console.log((allSquers));

 for( const i of allSquers){
    i.addEventListener('click',function() {
        //console.log(i);
        const idOfElement = i.getAttribute('id');
        //console.log(idOfElement);
        console.log(document.getElementById(idOfElement).innerHTML);

        
    });
 }