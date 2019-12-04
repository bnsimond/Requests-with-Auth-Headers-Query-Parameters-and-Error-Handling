/*request api for specific source*/
const apiKey = "2f1fdfd91f684d56a2342493d0257d83"

/*create function specific to information looking for*/
function findUser(userName) {
  /*endpoint specific in api instructions*/
  const searchUrl = `https://api.github.com/users/${userName}/repos`;
  
 /*
  const options = {
    headers: new Headers({
      "X-Api-Key": apiKey})
  };*/

  fetch(searchUrl)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      if (Array.isArray (responseJson)) {
        displayResults(responseJson)      
      } else {alert("No Results!")}     
    });
}
 
function displayResults (responseJson) {
    responseJson.forEach(item=>{
      $(".results").append (`<li><a href="${item.html_url}" target="_blank"> ${item.name}</a></li>`)
    })
}

function init () {
    $("#form").submit (e=>{
      e.preventDefault()
      $(".results").empty()
      var userInput = $("#searchName").val()
      findUser (userInput)
    })
}



$(init);