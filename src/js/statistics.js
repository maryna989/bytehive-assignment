import { statistics } from '../mocks/statisticsMocks';
const buildStats = statistics
  .map((item, index) => {
    let formatValue = item.value;

    if (index === 0) {
      formatValue = `${formatValue}+`;
    } else if (index === 1) {
      formatValue = `${formatValue}K`;
    } else if (index === 2) {
      formatValue = `${formatValue}%`;
    }
    return `<li class="static-item"><h3>${item.title}</h3><p class="item-value">${formatValue}</p></li>`;
  })
  .join('');

const createStats = `<ul class="statistics-list">${buildStats}</ul>`;

const statisContainer = document.querySelector('.js-statistics');
const titleStatis = document.querySelector('#js-statis');

statisContainer.insertAdjacentHTML('beforeend', createStats);
