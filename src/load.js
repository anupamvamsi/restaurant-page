import DOMElements from './DOMElements';
import DOM from './DOM';
import * as tabHome from './tabHome';
import * as tabExp from './tabExp';
import * as tabBook from './tabBook';
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

function loadHeadImg(image, className) {
  // const img = DOM.createEleAndAddAttributes(
  //   'img',
  //   ['src', image],
  //   ['style', 'height: 20vh']
  // );
  const imgDiv = DOM.createEleAndAddClasses('div', className);
  DOMElements.content.appendChild(imgDiv);
}

function loadHeading(tag, text) {
  const heading = DOM.createElementAndAddTextContent(tag, text);
  heading.classList.add('heading');

  DOMElements.content.appendChild(heading);
}

function loadIntro() {
  tabHome.loadContent();
}

function loadTabEventListeners() {
  DOMElements.getElementOfSelector('.home').addEventListener(
    'click',
    getTabContent
  );

  DOMElements.getElementOfSelector('.experience').addEventListener(
    'click',
    getTabContent
  );

  DOMElements.getElementOfSelector('.book').addEventListener(
    'click',
    getTabContent
  );
}

function clearTabContent() {
  DOMElements.content.removeChild(
    DOMElements.getElementOfSelector('.tabContent')
  );
}

function getTabContent(e) {
  clearTabContent();
  const tab = e.target.className;

  switch (tab) {
    case 'home':
      tabHome.loadContent();
      break;

    case 'experience':
      tabExp.loadContent();
      break;

    case 'book':
      tabBook.loadContent();
      break;
  }
}

export function pageLoad() {
  loadTabs();
  loadHeading('h1', 'Rant-And-Rest');
  loadIntro();
  loadTabEventListeners();
}
