function add(){
  const task = document.getElementById('task');
  const list = document.getElementById('list');

  if(task.value === '') return;

  const li = document.createElement('li');
  li.innerText = task.value;
  list.appendChild(li);

  task.value = '';
}
