import { renderTasks } from '../index.js';

describe('renderTasks', () => {
  test('should render tasks correctly', () => {
    document.body.innerHTML = '<ul class="list"></ul>';
    const listElem = document.querySelector('.list');
    const tasks = [
      { text: 'Buy milk', done: false, id: 1 },
      { text: 'Visit doctor', done: true, id: 4 },
    ];

    renderTasks(tasks, listElem);

    expect(listElem.children.length).toBe(2);
    expect(listElem.children[0].textContent).toContain('Buy milk');
    expect(listElem.children[1].textContent).toContain('Visit doctor');
    expect(listElem.children[1].classList).toContain('list__item_done');
  });
});
