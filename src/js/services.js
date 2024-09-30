const listServices = [
  ['Creative Direction', 'Art Direction', 'Visual Design', 'Service Design'],
  ['UX Design', 'Brand Identity', 'Concepting', 'Interaction Design'],
  ['Design Systems', 'Strategy', 'Digital Experiences', 'Consulting'],
];

const buildServicesMarkup = () => {
  return `
      <div class="our-services">
        ${listServices
          .map(
            servicesGroup => `
          <div class="services-group">
            ${servicesGroup
              .map(
                service =>
                  `<a href="#" class="service-item">${service}<svg class="icon-arrow" width="13" height="13"><use href='../img/icons.svg#icon-arrow'></use></svg></a>`
              )
              .join('')}
          </div>
        `
          )
          .join('')}
      </div>
    `;
};

const servicesContainer = document.querySelector('#js-services');

servicesContainer.insertAdjacentHTML('beforeend', buildServicesMarkup());
