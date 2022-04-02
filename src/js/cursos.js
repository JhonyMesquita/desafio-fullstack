async function getContent() {

    try {
        const cursos = await fetch('http://localhost:3000/cursos')
        const data = await cursos.json()

        show(data)

    } catch (error) {
        console.error(error)
    }

}

getContent()

function show(cursos) {
    let output = ''
    for (let curso of cursos) {
        output += `<div> 
                        <ul id="delete">
                            <li><input type="submit" value="Delete" id="button" onclick="deleteCurso()"</li>
                            
                            <li class="id-del">${curso.id}</li>

                            <li>${curso.disciplina}</li>
                            
                            <li class="p-prof">${curso.professor}</li>
                            
                            <li class="p-sala">Sala ${curso.sala}</li>
                            
                            <li class="p-hora">${curso.hora_i} às ${curso.hora_f}</li>
                            </ul>
                    </div>`
    }
    document.querySelector('main').innerHTML = output;
}

// DELETE
async function deleteCurso(){
  const liDel = await document.getElementsByClassName('id-del');
  const idDel = liDel.body;
  console.log(idDel)

  function DeletId(id){this.id = id}
  
  let deletId = new DeletId(idDel)


  console.log(deletId)

}



/* async function deletCurso(){

    fetch("http://localhost:3000/curso/delete", { 
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(delCurso), 
    })
        .then((response))



} */

