
// Fetching data 1 times and inside declare all the promise 
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => response.json())
//   .then(data => {
//       let promise1 = new Promise((resolve,reject)=>{
//         if(data.id==1){
//           resolve("This is correct data")
//         }else{
//           reject("This is not correct data")
//         }
//       })

//       let promise2 = new Promise((resolve,reject)=>{
//         if(data.title=="delectus aut autem"){
//           resolve("This is correct data")
//           console.log(data.title);
       
//         }else{
//           reject("This is not correct data")
//         }

//       })

//       let promise3 = new Promise((resolve,reject)=>{
//         if(data.completed==false){
//           resolve("This is correct data")
//         }else{
//           reject("This is not correct data")
//         }

//       })

//         Promise.all([
//         promise1,
//         promise2,
//         promise3


//       ]).then(message =>{
//         console.log(`Good: ${message}`);
//       }).catch(message=>{
//         console.log(`Error: ${message}`);
//       })

//   })

  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  // .then(response => response.json())
  // .then(data => console.log(data));




  

//This basically fetching data 3 times
  
let promise1 = new Promise((resolve,reject)=>{
 fetch("https://jsonplaceholder.typicode.com/todos/1")

  .then(response => response.json())
  .then(data=>{
    // var outPut = "";
    //   outPut+= `${Object.keys(data)}<br>${Object.values(data)}`;

    //   document.getElementById("p").innerHTML = outPut;
    //  // console.log(data[key]);

      
 
  if(data.id==1){

    resolve("This is correct data")
  }else{
    reject("This is not correct data")
  }
 
 })
})

let promise2 = new Promise((resolve,reject)=>{
  fetch("https://jsonplaceholder.typicode.com/todos/1")
 
   .then(response => response.json())
   .then(data=>{
   if(data.title=="delectus aut autem"){//Here is the wrong data, For this reason even if the rest are right but it sends error message,Cool!
     resolve("This is correct data")
   }else{
     reject("This is not correct data")
   }
  
  })
 })


 let promise3 = new Promise((resolve,reject)=>{
  fetch("https://jsonplaceholder.typicode.com/todos/1")
 
   .then(response => response.json())
   .then(data=>{
   if(data.completed==false){
     resolve("This is correct data")
   }else{
     reject("This is not correct data")
   }
  
  })
 })



Promise.all([
  promise1,
  promise2,
  promise3
]).then(message =>{

 document.getElementById("errorMessage").innerHTML = `Good: ${message}`;
 document.getElementById("errorMessage").classList.add("green")
 // console.log(`Good: ${message}`);
}).catch(message=>{
   document.getElementById("errorMessage").innerHTML  = `Error: ${message}`
   document.getElementById("errorMessage").classList.add("red")
   // console.log(`Error:${message}`)

})







/*const posts = [

{title:"Post one",body:"This is a body of postone"},
{title:"Post Two", body:"This is a body of posttwo"}

]

function getposts() {
        let outPut = "";
        posts.forEach((post)=>{
            outPut+= `<li>${post.title}</li>`;
        });
        
      var div =  document.createElement("div");
      div.style.backgroundColor = "grey";
      div.innerHTML = outPut;
      document.body.appendChild(div);
    
}
getposts();*/