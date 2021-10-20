
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskDescription = document.querySelector("#new-task-description").value
    const ul = document.querySelector('#tasks');
    const newList = document.createElement('li');
    newList.append(taskDescription);

    ul.append(newList);

  })

  console.log(form)
})

//taskDescription 
//for the value of "#new-task-description" to appear in an unorded list//
    // append value of "#new-task-description" to unordered list//
    //append a list item of the value of "#new-task-description" to an unordered list//
    //"tasks" = ul#//
    // taskDescription.
    //  const unorderedList = document.querySelector('#task');
    //   unorderedList.appendChild("taskDescription") 