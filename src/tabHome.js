import DOMElements from './DOMElements';

export function loadContent() {
  const para1 = document.createElement('p');
  para1.textContent =
    'Welcome to Rant-And-Rest\u2122, a deviation from the usual concept of a Restaurant! Here, you can book a soundproof room where you can rant all you like, eat up one of our deliciously made breakfast food after, and rest!';

  const para2 = document.createElement('p');
  para2.textContent +=
    "We allot three hours for all standard bookings! Of course, it is up to you to utilise the time you have, but we'd like to imagine you would break it down into an hour each of Ranting, Eating And Resting (REAR\u2122), to best utilise our soundproof rooms, our extremely tasty breakfast food and our beds with handpicked mattresses for the Best Rest You Can Ever Get\u2122!";

  DOMElements.content.appendChild(para1);
  DOMElements.content.appendChild(para2);
}
