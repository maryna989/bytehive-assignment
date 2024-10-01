import { listPlans } from '../mocks/listPlansMocks';

const ulElement = document.querySelector('.js-plans-list'); // Updated selector for the plans list

function createPlanMarkup(plan, index) {
  return `
            <li>
                <div class="plan-header">
                ${
                  plan.popular
                    ? `<span class="most-popular">Most popular</span>`
                    : ''
                }
                    <h3 class="title-plan">${plan.title}</h3> 
                    <span class="currency">$</span><p class="plan-price">${
                      plan.price
                    }</p><span class="month">month</span>
                    <p class="description">${plan.description}</p>
                    <button type="button" class="buy-now">Buy now</button>
                    
                </div>

                ${index === 0 ? `<p>What’s included</p>` : ''}

                <div class="plan-features">
                    <h4 class="plan">${plan.plan}</h4>
                    <ul class="list-features">
                        ${plan.features
                          .map(
                            feature => `
                            <li>
                                <svg width="27" height="27">
                                  <use href="../img/icons.svg#icon-Vector"></use> 
                                </svg>
                                ${feature}
                            </li>`
                          )
                          .join('')}
                    </ul>
                </div>
            </li>
        `;
}
ulElement.innerHTML = listPlans
  .map((plan, index) => createPlanMarkup(plan, index))
  .join('');
