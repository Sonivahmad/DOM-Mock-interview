
const openBtn = document.querySelector(".sidebar");

const container = document.querySelector(".modal-container");

const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  container.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

const modalBtn = document.querySelector(".btn");

modalBtn.addEventListener("click", () => {

  const mainContent = document.querySelector(".main-content");

  container.classList.remove('active');

  const msg = document.querySelector("#do"); //Textarea

  const task = document.createElement("div");
  task.classList.add("task");
  mainContent.append(task);   //append task

  const taskhead = document.createElement("div"); //inside task(color);
  taskhead.classList.add("task-head");
  taskhead.style.height = '35px';
  taskhead.style.backgroundColor = 'yellow';
  task.append(taskhead);

  const h1 = document.createElement('h1');
  h1.innerText = msg.value;
  h1.setAttribute('readonly','readonly');
  task.append(h1);

  const icons = document.createElement('div');
  icons.classList.add('icons');
  task.append(icons);

  const lockbtn = document.createElement('button');
  lockbtn.classList.add("lockbtn");
  lockbtn.innerHTML = '<i class="fa-solid fa-lock"></i>';
  icons.append(lockbtn);

    lockbtn.addEventListener('click',()=>{
    iconSet.style.visibility = 'visible';
    lockbtn.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
    });

    
  const iconSet = document.createElement('div')
  iconSet.classList.add('icon-set');
  icons.append(iconSet);
  iconSet.style.visibility = 'hidden';

  const check = document.createElement('button');
  check.classList.add('check');
  check.innerHTML = '<i class="fa-solid fa-check"></i>';
  iconSet.append(check);

  const trash = document.createElement('button');
  trash.classList.add('trash');
  trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
  iconSet.append(trash);

  const pencil = document.createElement('button');
  pencil.classList.add('pencil');
  pencil.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  iconSet.append(pencil);


  let delete_button = document.createElement("button");
  delete_button.classList.add("delete");
  delete_button.innerText = "\u{1F5D1}";
  internalDiv.append(delete_button);

  ////////////////////////////////////////////////////

  delete_button.addEventListener("click", (e) => {
    if (task_input_element2.classList.contains("text1")) {
      red.removeChild(task_element);
    } else if (task_input_element2.classList.contains("text2")) {
      yellow.removeChild(task_element);
    } else if (task_input_element2.classList.contains("text3")) {
      blue.removeChild(task_element);
    } else if (task_input_element2.classList.contains("text4")) {
      black.removeChild(task_element);
    } else {
      comp.removeChild(task_element);
    }
  });

  const editbtn = document.querySelector('.fa-pencil');
  editbtn.addEventListener('click',() =>{
    editbtn.style.color = "blue";
    h1.contentEditable = true;
    console.log(h1);
  })

});