//Табы на странице engine

let mainConsultTabsButtons = document.querySelectorAll('.consult-tabs__button');
let mainConsultTabsItems = document.querySelectorAll('.consult-tabs__item');

mainConsultTabsButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    
    e.preventDefault();
    const mainConsultId = e.target.getAttribute('href').replace('#', '');

    mainConsultTabsButtons.forEach(
      (child) => child.classList.remove('consult-tabs__button--active')
    );
    mainConsultTabsItems.forEach(
      (child) => child.classList.remove('consult-tabs__item--active')
    );

    item.classList.add('consult-tabs__button--active');
    document.getElementById(mainConsultId).classList.add('consult-tabs__item--active');
  })
})