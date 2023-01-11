const ocForm = document.getElementById("oc-form");

ocForm.addEventListener("submit", (event) => {
    //prevent the default behavior of the form submit
    event.preventDefault();

    //get the value of the form inputs
    const ocNumber = ocForm["oc-number"].value;
    const provider = ocForm["provider"].value;
    const date = ocForm["date"].value;
    const products = ocForm["products"].value;
    const total = ocForm["total"].value;

    //validate the inputs
    if(!ocNumber || !provider || !date || !products || !total){
      alert("Todos los campos son obligatorios");
      return;
    }
    // if total is not number
    if(isNaN(total)){
      alert("Monto total debe ser un numero valido");
      return;
    }

    //if the inputs are valid
    //create an object to send as the request body
    const ocData = {
      ocNumber,
      provider,
      date,
      products,
      total
    }

    // send the data to the backend using fetch API
    fetch('http://your-backend-url/oc', {
      method: 'POST',
      body: JSON.stringify(ocData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
       if(data.success){
         alert("OC enviada con exito!");
       }else{
         alert("Error al enviar OC");
       }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("Error al enviar OC");
    });
});
