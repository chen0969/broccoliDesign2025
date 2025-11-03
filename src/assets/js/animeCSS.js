// src/assets/animeCSS.js
export const useAnimateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve) => {
    const animationName = `${prefix}${animation}`;
    const node =
      typeof element === 'string'
        ? document.querySelector(element)
        : element; // allows passing a selector string or a DOM node/ref

    if (!node) {
      console.warn(`animateCSS: no element found for ${element}`);
      resolve();
      return;
    }

    node.classList.add(`${prefix}animated`, animationName);

    const handleAnimationEnd = (event) => {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    };

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });
