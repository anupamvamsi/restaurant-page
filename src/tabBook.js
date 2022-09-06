import DOMElements from './DOMElements';
import DOM from './DOM';

export function loadContent() {
  const tabContent = DOM.createEleAndAddClasses('section', 'tabContent');

  const para1 = document.createElement('p');
  para1.textContent = 'Want to Book The Experience\u2122?';

  const para2 = document.createElement('p');
  para2.textContent +=
    "We allot three hours for all standard bookings! Of course, it is up to you to utilise the time you have, but we'd like to imagine you would break it down into an hour each of Ranting, Eating And Resting (REAR\u2122), to best utilise our soundproof rooms, our extremely tasty breakfast food and our beds with handpicked mattresses for the Best Rest You Can Ever Get\u2122!";

  tabContent.appendChild(para1);
  tabContent.appendChild(para2);

  DOMElements.content.appendChild(tabContent);
}
