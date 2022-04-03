const postList = document.querySelector('.post-list');
let output = '';

const renderCursos = (cursos) => {
    cursos.forEach(curso => {
        output += `
        <div class="card" style="width: 18rem;">
        <div class="card-body" data-id=${curso.id}>
            <a href="#" class="card-link" id="delete-curso">Delete</a>
          <h5 class="card-title">${curso.disciplina}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${curso.professor}</h6>
          <p class="card-text">${curso.sala}</p>
          <p class="card-text"><a>${curso.hora_i}</a><a>${curso.hora_f}</a></p>
          
          
        </div>
        </div>`
    });
    postList.innerHTML = output;
}

const url = 'http://localhost:3000/cursos';

//Get - Read the cursos
// Method: GET 
fetch(url)
    .then(res => res.json())
    .then(data => renderCursos(data))

postList.addEventListener('click', (e) => {
    e.preventDefault();
    let delButtonIsPressed = e.target.id == 'delete-curso';

    console.log(e.target.parentElement.dataset.id);
    let id = e.target.parentElement.dataset.id;
    // Delete - remove o curso existente
    // method: DELETE 
    if (delButtonIsPressed) {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => location.reload())
    }
})