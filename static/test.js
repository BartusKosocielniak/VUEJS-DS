const options = {
   method: "GET",
   headers: {
      "Content-Type": "application/json"     
   }
}
fetch("/test", options)
   .then(response => response.json()) // konwersja na obiekt json, jeśli konieczne
   .then(data => alert(JSON.stringify(data, null, 5))) // sformatowane z wcięciami dane odpowiedzi z serwera
   .catch(error => console.log(error));

console.log(data)