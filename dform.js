
document.getElementById("sub").addEventListener("click", function(event){

  event.preventDefault();
 
 const name = document.getElementById('name').value
 const email = document.getElementById('email').value

axios.post('https://reqres.in/api/users', {
    name: name,
    job: email
    
 })
 .then(function (response) {
    console.log(response);
 })
 .catch(function (error) {
    console.log(error);
 });
  alert('Successful entry');
});

 




