let mainConsultTabsButtons = document.querySelectorAll('.consult-tabs__button');
let mainConsultTabsItems = document.querySelectorAll('.consult-tabs__item');
let consultFooterLinks = document.querySelectorAll('.footer-main__consult-link');

//Табы на странице consulting
mainConsultTabsButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const mainConsultId = e.target.getAttribute('href').replace('#', '');

    mainConsultTabsButtons.forEach((child) => child.classList.remove('consult-tabs__button--active'));
    mainConsultTabsItems.forEach((child) => child.classList.remove('consult-tabs__item--active'));

    button.classList.add('consult-tabs__button--active');
    document.getElementById(mainConsultId).classList.add('consult-tabs__item--active');
  })
})

//Открытие таба при переходе на страницу по ссылке из футера
window.addEventListener('load', () => {
  if (mainConsultTabsItems !== null && mainConsultTabsItems !== null && Boolean(window.location.hash)) {
    const mainConsultLinkId = window.location.hash.split('#')[1];

    mainConsultTabsButtons.forEach((child) => child.classList.remove('consult-tabs__button--active'));
    mainConsultTabsItems.forEach((child) => child.classList.remove('consult-tabs__item--active'));

    document.querySelector(`a[href='#${mainConsultLinkId}']`).classList.add('consult-tabs__button--active');
    document.getElementById(mainConsultLinkId).classList.add('consult-tabs__item--active');
  }
})

//Открытие таба при нажатии на ссылку из футера на той же странице
consultFooterLinks.forEach((link) => {
  if (mainConsultTabsItems !== null && mainConsultTabsItems !== null) {
    link.addEventListener('click', () => {
      const mainConsultLinkTarget = link.href.split('#')[1];

      mainConsultTabsButtons.forEach((child) => child.classList.remove('consult-tabs__button--active'));
      mainConsultTabsItems.forEach((child) => child.classList.remove('consult-tabs__item--active'));

      document.querySelector(`a[href='#${mainConsultLinkTarget}']`).classList.add('consult-tabs__button--active');
      document.getElementById(mainConsultLinkTarget).classList.add('consult-tabs__item--active');
    })
  }
})