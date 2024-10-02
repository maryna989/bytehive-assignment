import { listPlans } from '../mocks/listPlansMocks';
import { createFeatureItem } from '../components/planCarts';

const ulElement = document.querySelector('.js-plans-list');

function getClassString(className, isStandard) {
  return isStandard ? `${className} ${className}-standart` : className;
}

function createPlanMarkup(plan, index) {
  return `
            <li class="${getClassString('pricing-items', plan.popular)}">
                 ${
                   plan.popular
                     ? `<div class="most-popular"><span>Most popular</span></div>`
                     : ''
                 }
                <div class="${getClassString('plan-header', plan.popular)}">
               
                    <h3 class="${getClassString('title-plan', plan.popular)}">${
    plan.title
  }</h3> 
                    <div class="price-container"><span class="${getClassString(
                      'currency',
                      plan.popular
                    )}">$</span><p class="${getClassString(
    'plan-price',
    plan.popular
  )}">${plan.price}</p><span class="${getClassString(
    'month',
    plan.popular
  )}">month</span>
                    </div><p class="${getClassString(
                      'description',
                      plan.popular
                    )}">${plan.description}</p>
                    <button type="button" class="${getClassString(
                      'buy-now',
                      plan.popular
                    )}">Buy now</button>
                    
                </div>
                <div class="plan-features">
                
                 ${
                   index === 0
                     ? `<p class="plan-features-item">What’s included</p>`
                     : ''
                 }

                    <h4 class="plan-title">${plan.plan}</h4>
                    <ul class="list-features">
                        ${plan.features.map(createFeatureItem).join('')}
                    </ul>
                </div>
            </li>
        `;
}
ulElement.innerHTML = listPlans
  .map((plan, index) => createPlanMarkup(plan, index))
  .join('');
