async function fetchRandomUser() {

    const response = await fetch("https://randomuser.me/api/")
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json()
      })
    .then(jsonData => {return jsonData})
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
    return response
}

let responseObj = fetchRandomUser();
console.log(responseObj);
 let info = responseObj.results[0];
// console.log(info);
