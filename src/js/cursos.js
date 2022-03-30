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
                         <button><i>Delete</i></button>
                        <li>${curso.disciplina}</li>
                            
                                <p class="p-prof">${curso.professor}</p>
                                <hr>
                                <p class="p-sala">Sala ${curso.sala}</p>
                                <hr>
                                <p class="p-hora">${curso.hora_i} às ${curso.hora_f}</p>
                        </div>`
    }
    document.querySelector('main').innerHTML = output;
}



