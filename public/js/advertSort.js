
      const printButton = document.getElementById("printButton");
      const select = document.getElementById('dateConst');
      const selectButton = document.getElementById("sub")
      const elements = document.body.querySelector("table")
          .childNodes[3].childNodes;
          const remove = document.getElementById("remove");
      var el = document.body.querySelectorAll("tr")
      printButton.addEventListener("click", () =>{

        window.print();
})    
window.addEventListener("load", (event) => {
  var date = new Date();
  var month = date.getMonth()
  var year = date.getYear()

  var newDate = date.toISOString().split('T')[0];
  
  select.value =newDate.slice(0,7); 

  for(i=1;i<el.length;i++){ 

if(el[i].className.slice(0,7) == newDate.slice(0,7)){
    
    el[i].style.display = "table-row"
    var date = new Date();


    
   
}else if(el[i].className.slice(0,7) != newDate.slice(0,7)){
    el[i].style.display = "none"
}
}
});

      selectButton.addEventListener("click", (e) =>{
         if(select.value.length == 0) {
          var element1 = document.querySelector(".info")
          var tab = document.querySelector("table")

          element1.style.display = "block";

          setTimeout(()=>{

          element1.style.display = "none";
          },2000)

         }
          for(i=1;i<el.length;i++){ 

              if(el[i].className.slice(0,7) == select.value.slice(0,7)){
                  
                  el[i].style.display = "table-row"
                  var date = new Date();
       

                  
                 
              }else if(el[i].className.slice(0,7) != select.value.slice(0,7)){
                  el[i].style.display = "none"
              }
              }
      
      }

      )

   