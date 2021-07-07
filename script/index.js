

const main = () => {
    // toggleButtonFunction()

    fetch("https://swapi.dev/api/people")
    .then(response => {
        if(!response.ok){ throw Error("Error")};
       return response.json();
    })
    .then(objectData => { console.log(objectData.results)
    
const accessObjectData = objectData.results.map((element,index) => {
  // let innerContainer = document.createElement("div")
  // let titleContainer = document.createElement("h1")
  // let nameContainer = document.createElement("h6")
  // innerContainer.className = "inner-container"
  // container.appendChild(innerContainer)
  // innerContainer.appendChild(titleContainer)
  // innerContainer.appendChild(nameContainer)
  // titleContainer.innerHTML = element.name
  //     console.log("Result", container)
        return `  <div  class="container">

         <div class="people">

                <div class="box${index} box">
                    <div class="bg"></div>
                    <div class="details child1">
                        <h1>Meet Our <br/> Models</h1>
                        <button onclick = "toggleText('show${index}')" >${element.name}</button><br/>
                      <div class= "house" style =" display: none" id ="show${index}">  <p class="API" >
                      <ul class="type">
                         <li> NAME: ${element.name}</li>
                         <li> GENDER: ${element.gender}</li>
                        <li>HEIGHT: ${element.height}</li>
                      </ul>
                        </p> </div>
                        
                    </div>

                    <div class="illustration child2"><div style="position:relative" class="inner"><img style=" border-radius: 30px" width="100%" height ="99.94%" src="images/img${index}.jpg" alt="image"> </div></div>
                </div>
                  
            </div> </div>`
            
    })

    
        


        
 document
 .querySelector("#catch").insertAdjacentHTML("beforeend", accessObjectData)



})

    
}
main()




const toggleText = (id) =>  {
  let text = document.getElementById(id);
    if (text.style.display === "none") { text.style.display = "block"; } 
    else { text.style.display = "none"; }
}


