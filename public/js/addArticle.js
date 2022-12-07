
const AddingField = document.getElementById("AddingField")
const AddButton = document.getElementById("AddButton");
const buttonExit1  = document.querySelectorAll(".exit")[1];
const addItem = document.getElementById("addItem")
buttonExit1.addEventListener("click", () => {
    document.querySelector(".table").style.display = "block";
    document.querySelector("body").style.backgroundColor = "white";
    AddingField.style.display = "none";

})



  

addItem.addEventListener("click", () => {
    AddingField.style.display = "block";
    document.querySelector(".table").style.display = "none";
    document.querySelector("body").style.backgroundColor = "#333";
})
AddButton.addEventListener("click", () =>{

    const titleField = AddingField.elements.namedItem('title')
    const completedField = AddingField.elements.namedItem('completed')
    const descriptionField = AddingField.elements.namedItem('description')
    const timeField = AddingField.elements.namedItem('time')

if(titleField.checkValidity() && completedField.checkValidity() && descriptionField.checkValidity() && timeField.checkValidity() ){
    fetch('/admin/add', {
        method: 'post',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: titleField.value,
            completed: completedField.value,
            description: descriptionField.value,
            time: timeField.value
        
    })

}).then( (res) => {
    return res.json()
}).then( (response) => {
if(response === 'Success'){
   
    AddingField.style.display = "none";
    location.reload();



} else{

    alert('There was a problem with adding your article')

}
})
.catch( (error) => {
console.log(error)
})

}
})
