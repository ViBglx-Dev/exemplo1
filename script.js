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