const pageName = window.location.pathname.split('/')[1].split('.')[0];
const isFollowedPage = window.location.href.split('').includes('#');

let mainEngineTabsButtons = document.querySelectorAll('.engine-tabs__button');
let mainEngineTabsItems = document.querySelectorAll('.engine-tabs__item');
let engineFooterLinks = document.querySelectorAll('.footer-main__engine-link');

//Табы на странице engineering
mainEngineTabsButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const mainEngineId = e.target.getAttribute('href').replace('#', '');

    mainEngineTabsButtons.forEach((child) => child.classList.remove('engine-tabs__button--active'));
    mainEngineTabsItems.forEach((child) => child.classList.remove('engine-tabs__item--active'));

    button.classList.add('engine-tabs__button--active');
    document.getElementById(mainEngineId).classList.add('engine-tabs__item--active');
  })
})


//Открытие таба при переходе на страницу по ссылке из футера
window.addEventListener('load', () => {
  if (pageName === 'engineering' && isFollowedPage === true) {
    const mainEngineLinkId = window.location.href.split('#')[1];

    mainEngineTabsButtons.forEach((child) => child.classList.remove('engine-tabs__button--active'));
    mainEngineTabsItems.forEach((child) => child.classList.remove('engine-tabs__item--active'));

    document.querySelector(`a[href='#${mainEngineLinkId}']`).classList.add('engine-tabs__button--active');
    document.getElementById(mainEngineLinkId).classList.add('engine-tabs__item--active');
  }
})

//Открытие таба при нажатии на ссылку из футера на той же странице
engineFooterLinks.forEach((link) => {
  if (pageName === 'engineering') {
    link.addEventListener('click', () => {
      const mainEngineLinkTarget = link.href.split('#')[1];

      mainEngineTabsButtons.forEach((child) => child.classList.remove('engine-tabs__button--active'));
      mainEngineTabsItems.forEach((child) => child.classList.remove('engine-tabs__item--active'));

      document.querySelector(`a[href='#${mainEngineLinkTarget}']`).classList.add('engine-tabs__button--active');
      document.getElementById(mainEngineLinkTarget).classList.add('engine-tabs__item--active');
    })
  }
})