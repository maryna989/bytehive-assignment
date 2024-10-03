import { listServices } from '../mocks/listServicesMocks';

const buildServicesMarkup = () => {
  return `
        ${listServices
          .map(
            servicesGroup => `
          <div class="services-group">
            ${servicesGroup
              .map(
                service =>
                  `<a href="#" class="service-item">${service}<svg class="icon-arrow" width="13" height="13"><use href='/img/icons.svg#icon-arrow'></use></svg></a>`
              )
              .join('')}
            </div>`
          )
          .join('')}
    `;
};

const servicesGroupsContainer = document.querySelector('.js-our-services');
servicesGroupsContainer.innerHTML = buildServicesMarkup(listServices);
