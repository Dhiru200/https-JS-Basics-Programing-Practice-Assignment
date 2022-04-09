
          function(){
              bar maths, num;

              maths=document.sunny.john.value;
              num=maths.replace(/\s/g,'').length;

              if (maths>"0")
              {
                  sci=num;
                
              }
              else if(maths=="0")
              {
                sci=0;
              }
              else
              {
                  sci="Error"
              }
              var snow = document.getElementById("mine");
              snow.innerHTML = sci;
          }
         
    