//Табы на странице engine

let mainEngineTabsButtons = document.querySelectorAll('.engine-tabs__button');
let mainEngineTabsItems = document.querySelectorAll('.engine-tabs__item');

mainEngineTabsButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    
    e.preventDefault();
    const mainEngineId = e.target.getAttribute('href').replace('#', '');

    mainEngineTabsButtons.forEach(
      (child) => child.classList.remove('engine-tabs__button--active')
    );
    mainEngineTabsItems.forEach(
      (child) => child.classList.remove('engine-tabs__item--active')
    );

    item.classList.add('engine-tabs__button--active');
    document.getElementById(mainEngineId).classList.add('engine-tabs__item--active');
  })
})