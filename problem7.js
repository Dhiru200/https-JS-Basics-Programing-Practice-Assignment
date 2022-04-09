
          function Django(){
              var mars, no;
              mars=document.pebbles.stones.value;
              no = mars*mars;

              if (mars>0)
              {
                  inputText =no;
              }
              else if (mars==0)
              {
                  inputText = 0;
              }
              else{
                  inputText ="Error";       
                
              }

              var house = document.getElementById("people");
              house.innerHTML = inputText;
    
            }
      