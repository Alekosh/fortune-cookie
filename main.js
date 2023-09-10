// const arrays = ['Тебе сегодня везет', 'Сегодня будет солнечно', 'Сегодня тебя будут ждать', 'В доте ты выиграешь'];
const arrays = ['Тебе сегодня везет', 'По пути найдешь красивую девушку мечты', 'Тебя ждет прекрасный ужин', 'Сегодня будет ясный день', 'Ты милый'];

const paper = document.querySelector('.paper p');
const paperBody = document.querySelector('.paper').addEventListener('click', () => {
  let item = arrays[Math.floor(Math.random() * arrays.length)];
  paper.innerHTML = item;
})