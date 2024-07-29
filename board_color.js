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



       


    