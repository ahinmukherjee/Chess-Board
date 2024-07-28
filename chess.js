 // for(let i=0;i<n;i++){
        //     if(n%2!==0){

        //     }
        //   for(let j=0;j<i;j++){
        //     if(n%2==0){

        //     }
        //     else{

        //     }
        //   }  
        // }

        const boxChess = document.querySelectorAll(".box-chess");
        // console.log(boxChess)


        let flag = false
        for (let i = 0; i < boxChess.length; i++) {
            // boxChess[i].innerText = i
            if (i % 8 === 0) {
                flag = !flag;
            }
            if (flag == true) {
                if (i % 2 === 0) {

                    //boxChess[i].style.backgroundColor = "white";
                    boxChess[i].style.backgroundColor = "rgb(50, 194, 50)";
                } else {
                    //boxChess[i].style.backgroundColor = "black";
                    boxChess[i].style.backgroundColor = "blue";
                }
            } else {
                if (i % 2 === 0) {
                    //boxChess[i].style.backgroundColor = "black";
                    boxChess[i].style.backgroundColor = "blue";
                } else {
                    //boxChess[i].style.backgroundColor = "white";
                    boxChess[i].style.backgroundColor = "rgb(50, 194, 50)";
                }

            }

        }



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