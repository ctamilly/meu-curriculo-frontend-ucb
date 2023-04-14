
function efeitoHabilidades() {
    var habilidades = document.getElementByClassName("habilidades");
    var percentual_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(percentual_habilidades >= 300){
        let habilidade = document.getElementByClassName("progresso");
        habilidade[0].classList.add("html");
        habilidade[1].classList.add("css");
        habilidade[2].classList.add("javascript");
        habilidade[3].classList.add("comunicacao");
        habilidade[4].classList.add("equipe");
        habilidade[5].classList.add("comprometimento");
        habilidade[6].classList.add("portugues");
        habilidade[7].classList.add("ingles");
        habilidade[8].classList.add("frances");
    }
}

window.onscroll = function() {
    efeitoHabilidades()
}

function geraPdf() {
    let doc = new jsPDF();
    doc.fromHTML('<h1>Cristhiane Carvalho</h1>');
    doc.save('curriculo.pdf');
}