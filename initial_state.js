 // numbering of all array elements


     //console.log(document.querySelectorAll(".box-chess"));

     const arrayFiles = document.querySelectorAll(".chess");
     //console.log(arrayFiles.length);
    
     const nameOfArray = ["a", "b","c", "d", "e", "f", "g", "h"];

     let filenumber = 0;
     
     for (const i of arrayFiles) {
        //console.log(arrayFiles[i]);
         let counter = 1;
       for (const element of i.children){
        element.setAttribute('id', nameOfArray[filenumber] + counter);
            console.log(element);
        counter++;
       }

       filenumber++;
     }

     for (const i of arrayFiles) { 
         console.log(i.children);
     }