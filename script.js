  // Seleção pelo ID
  let titulo = document.getElementById("titulo");
  console.log(titulo);
        
       // Seleção pela classe
  let esportesPorClasse = document.getElementsByClassName("esporte");
 console.log(esportesPorClasse);
        
       // Seleção pela tag
  let itensLista = document.getElementsByTagName("ul");
   console.log(itensLista[0]);
        
  let primeiroEsporte = document.querySelector(".esporte");
   console.log(primeiroEsporte);
        
   let todosEsportes = document.querySelectorAll(".esporte");
   console.log(todosEsportes);

  titulo.innerText = "esportes";
  titulo.innerHTML ="<span style='color:blue'>Meus esportes favoritos </span>"

  let lista = document.getElementById("listadeesporte");

  let novoesporte1 = document.createElement("li");
  novoesporte1.innerText = "natação";

  let novoesporte2 = document.createElement("li");
  novoesporte2.innerText = "beach tenis";

  listadeesporte.appendChild(novoesporte1);
  listadeesporte.appendChild(novoesporte2);