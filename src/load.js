import DOMElements from './DOMElements';
import DOM from './DOM';
import * as tabHome from './tabHome';
import image from './img/jason-leung-unsplash.jpg';

function loadTabs() {
  const tabsContainer = DOM.createEleAndAddClasses('nav', 'tabs');
  const tab1 = DOM.createElementAndAddTextContent('a', 'Home');
  tab1.classList.add('home');

  const tab2 = DOM.createElementAndAddTextContent('a', 'The Experience');
  tab2.classList.add('experience');

  const tab3 = DOM.createElementAndAddTextContent('a', 'Book The Experience!');
  tab3.classList.add('book');

  tabsContainer.appendChild(tab1);
  tabsContainer.appendChild(tab2);
  tabsContainer.appendChild(tab3);

  DOMElements.content.appendChild(tabsContainer);
}

function loadHeadImg(image) {
  const img = DOM.createEleAndAddAttributes(
    'img',
    ['src', image],
    ['style', 'height: 20vh']
  );
  DOMElements.content.appendChild(img);
}

function loadHeading(tag, text) {
  const heading = DOM.createElementAndAddTextContent(tag, text);

  DOMElements.content.appendChild(heading);
}

function loadIntro() {
  tabHome.loadContent();
}

export function pageLoad() {
  loadTabs();
  loadHeadImg(image);
  loadHeading('h1', 'Rant-And-Rest');
  loadIntro();
}
