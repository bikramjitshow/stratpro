// Get all accordion items
const accordionItems = document.querySelectorAll('.scaccordionitem');

// Add click event to each accordion item
accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    // add active class 
    item.classList.add('active');

    // remove active class
    accordionItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });
  });
});