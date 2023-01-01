console.log('connecté');

//Je selectionnne et je stoke
const form = document.getElementById("form");
console.log(form);
const todo = document.getElementById("todo");
console.log(todo);
//Je selectionne et je stocke
const listItems = document.querySelector(".list-items");
console.log(listItems);
//Je récupère la valeur de l'input
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("boutton cliqué");
  const todoValue = todo.value;
  console.log(todoValue);
  //Je crée l'élément
  let item = ` 
                   <div class="item">
                      <p>${todoValue}</p>
                      <button class="btn-delete">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                      <button class="btn-archive">
                        <i class="fas fa-check-circle"></i>
                      </button>
                    </div>
             `;
  //Je place le item dans la listItems
  listItems.innerHTML += item;

  //Je selectionne tous les boutons btn-delete existants dans la pages
  const btnDelete = document.querySelectorAll('.btn-delete');
  console.log(btnDelete);
  btnDelete.forEach(i => {
    console.log('btn-delete');

    // Au clic sur le button supprimer
    i.addEventListener('click', function(){
        console.log('btn-delete cliqué');
        //j'enlève l'élément parent
        i.parentElement.remove();
    });
  });//Fermeture de btnDelete.forEach

  // Je sélectionne tous les bouttons btn-archive existants dans la page
  const btnArchive = document.querySelectorAll('.btn-archive');
  console.log(btnArchive);
  btnArchive.forEach(i => {
    console.log('btn-archive');
    i.addEventListener('click', function(){
        //je cible l'élément parent de i
        const parent = i.parentElement;
        // J'agis sur la DIV parent (class item)
        i.parentElement.classList.toggle('done')
    });
  });

  // Réinitialiser le formulaire
  form.reset(); 

});// fermeture de form.addEventListener
