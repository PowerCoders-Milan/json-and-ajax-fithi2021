fetch("https://jsonplaceholder.typicode.com/todos/3")
  .then(response => response.json())
  .then(data =>{
   var keys = `Keys:${Object.keys(data)}`
    document.getElementById("keys").innerHTML = keys
    document.getElementById("values").innerHTML = `Values:${Object.values(data)}`
  })


//   var pro = new Promise((reslove)=>{
//     if(data.id == 1){
//       reslove("This is resolved")
//     }


// }).then(mess =>{
//   document.getElementById("1").innerHTML = mess;
// }).catch(mess=>{
//   document.getElementById("1").innerHTML = mess
// })