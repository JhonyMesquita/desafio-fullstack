
function salvarCad() {

    var selectProf = document.getElementById("post-prof");
    var itemsProf = [];
    for (let i = 0; i < selectProf.options.length; i++) {
        if (selectProf.options[i].selected) {
            itemsProf.push(selectProf.options[i].text);
        }
    }
    objProf = { professores: itemsProf };
    console.log(objProf);

    var selectSala = document.getElementById("post-sala");
    var itensSala = [];
    for (let i = 0; i < selectSala.options.length; i++) {
        if (selectSala.options[i].selected) {
            itensSala.push(selectSala.options[i].text);
        }
    }
    objSala = { salas: itensSala };
    console.log(objSala);


}



