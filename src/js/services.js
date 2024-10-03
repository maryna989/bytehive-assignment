import { listServices } from '../mocks/listServicesMocks';
import { iconArrow } from '../components/iconArrow';

const buildServicesMarkup = () => {
  return `
        ${listServices
          .map(
            servicesGroup => `
          <div class="services-group">
            ${servicesGroup
              .map(
                service =>
                  `<a href="#" class="service-item">${service}${iconArrow()}</a>`
              )
              .join('')}
            </div>`
          )
          .join('')}
    `;
};

const servicesGroupsContainer = document.querySelector('.js-our-services');
servicesGroupsContainer.innerHTML = buildServicesMarkup(listServices);
