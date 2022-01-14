
var namee = document.querySelector("#name")
var code = document.querySelector('#code')
var population = document.querySelector(".population")
var coderegion = document.querySelector(".code-region")


document.querySelector("#cp").addEventListener('input', function(){
    if (this.value.length == 5  ) {
        let url = 
            `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,
             code,codesPostaux,codedepartement,codeRegion,population&format=json&geometry=centre`;
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url, true)
            xhr.onload = function (){
                if (this.status === 200 ){

                    let data = JSON.parse(this.responseText);
                    for (let ville of data){
                        population.textContent = ville.population;
                        coderegion.textContent = ville.codeRegion;
                        namee.textContent = ville.nom;
                        code.textContent = ville.code;
                        

    
                    }

                    }
                    else {
                        alert("Some error occured");
                      }
                    
     }
     xhr.send();
    };
           
});
           








