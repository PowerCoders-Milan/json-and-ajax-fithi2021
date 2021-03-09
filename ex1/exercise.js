
var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!",
   
  }
 object.body = "This is a body of the content";
  //changing the object to JSON Format.
  console.log("This is JSON format");
  const myJsonFile = JSON.stringify(object);
  console.log(myJsonFile);
  //changing the  JSON file to Obj.
  console.log("This is an obj JS")
  const myObj = JSON.parse(myJsonFile);
  console.log(myObj);
  //Using the forin loop 
  for (const values in myObj) {
      console.log(myObj[values]);
  }

  