const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

export const renderTasks = (tasksList, listElem) => {
  if (!listElem) return;
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .slice()
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

export const onToggleTask = e => {
  const isCheckbox = e.target.matches('.list__item-checkbox');

  if (!isCheckbox) return;

  const taskId = Number(e.target.dataset.id);
  const taskData = tasks.find(task => task.id === taskId);
  taskData.done = e.target.checked;
  const listElem = document.querySelector('.list');
  renderTasks(tasks, listElem);
};

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const listElem = document.querySelector('.list');

  const text = taskTitleInputElem.value;

  if (!text) return;

  tasks.push({
    text,
    done: false,
    id: tasks.length + 1,
  });

  renderTasks(tasks, listElem);
  taskTitleInputElem.value = '';
};

document.addEventListener('DOMContentLoaded', () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  
  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onToggleTask);

  renderTasks(tasks, listElem);
});
