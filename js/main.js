let loaded = (eventLoaded) => {
    window.alert("landing page loaded");
    console.log(eventLoaded);
    let myform = document.getElementById('miFormulario');
    myform.addEventListener("submit", handleSubmit);
    debugger;
  }
  
  window.addEventListener("DOMContentLoaded", loaded);
  

