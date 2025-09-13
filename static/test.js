const root = document.getElementById("root");

const options = {
   method: "GET",
   headers: {
      "Content-Type": "application/json"     
   }
}


function htmlBuilder(data) {
   console.log(data);
   data.folders.forEach((folder, index) => {
      let div = document.createElement("div");
      div.classList.add("folder");
      div.innerHTML = `<h2>${folder}</h2>`;
      data.lessons[index].forEach(lesson => {
         let a = document.createElement("a");
         a.textContent = lesson;
         a.href = `/${lesson}`;
         div.appendChild(a);
      });
      // let ul = document.createElement("ul");
      root.appendChild(div);
   });
}
fetch("/test", options)
   .then(response => response.json()) // konwersja na obiekt json, jeśli konieczne
   .then(data => {
      htmlBuilder(data);
   } )
   .catch(error => console.log(error));