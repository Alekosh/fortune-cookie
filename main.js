// const arrays = ['Тебе сегодня везет', 'Сегодня будет солнечно', 'Сегодня тебя будут ждать', 'В доте ты выиграешь'];
const arrays = ['Тебе сегодня везет', 'Тебя понизят до Хлебера', 'Сегодня тебя повысят до Манагера', 'Завтра уходишь в псж'];

const paper = document.querySelector('.paper p');
const paperBody = document.querySelector('.paper').addEventListener('click', () => {
  let item = arrays[Math.floor(Math.random() * arrays.length)];
  paper.innerHTML = item;
})