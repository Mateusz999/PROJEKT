const editLinks = document.querySelectorAll(".edit-link");
const editField = document.getElementById("EditField")
const saveButton = document.getElementById("saveButton");
const buttonExit  = document.querySelectorAll(".exit")[0];

buttonExit.addEventListener("click", () => {
   
    editField.style.display = "none";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".table").style.display = "block";
})

var advert_id



editLinks.forEach( (e) => {
     e.addEventListener("click", (event) => {

        document.querySelector(".table").style.display = "none";
        document.querySelector("body").style.backgroundColor = "#333";
 
         advert_id = event.currentTarget.parentNode.parentNode.id;

        fetch('/admin/edit/' + advert_id)
            .then( (res) => {
                if(res.ok) return res.json()
            })
            .then( (response) => {
                console.log(response)
                if(response){
                    editField.elements.namedItem('title').value = response.title
                    editField.elements.namedItem('completed').value = new Date(response.completed).toISOString().split('T')[0]
                    editField.elements.namedItem('description').value = response.description
                    editField.elements.namedItem('time').value = response.time
                    editField.style.display = 'block';
                } else{
                    alert('There was a problem with gettin advert')
                }
            })
            .catch((error)=> console.log(error))

     })
})
saveButton.addEventListener("click", (e) => {

    const titleField = editField.elements.namedItem('title')
    const completedField = editField.elements.namedItem('completed')
    const descriptionField = editField.elements.namedItem('description')
    const timeField = editField.elements.namedItem('time')

    if(titleField.checkValidity() && completedField.checkValidity() && descriptionField.checkValidity() && timeField.checkValidity() ){
    fetch('admin/putEdit/' + advert_id, {
        method: 'put',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: titleField.value,
            completed: completedField.value,
            description: descriptionField.value,
            time: timeField.value
        })
    })
    .then((res) => {
        if(res.ok) return res.json()
    })
    .then((response) =>{
        if(response == "Success") {

            editField.style.display = "none";
            location.reload();
        }else { alert('There was a problem with editing') }
    }).catch((error) => console.log(error))

}
})