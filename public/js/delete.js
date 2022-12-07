
const deleteLinks = document.querySelectorAll(".delete-link");

deleteLinks.forEach((e) => {
    e.addEventListener("click", (event) => {
          
        
            
            fetch('/admin/delete',{
                method: 'delete',
                headers: {'Content-type':'application/json'},
                body: JSON.stringify({
                    id: event.currentTarget.parentNode.parentNode.id,
                })
            })
            .then( (resp) => {
                if(resp.ok) return resp.json()
            })
            .then( (response) => {
                if(response ==='Success'){
                    e.parentElement.parentElement.remove()
                } else {
                    alert("Wystąpił problem z usunięciem artykułu skonsultuj się z supportem.")
                }
            })
            .catch ((error) => console.log('error'))
        
    })
})

