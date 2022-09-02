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

//Открытие определённого таба при переходе на страницу по ссылке из футера

function engineOpenLink(buttons, items) {
  if (buttons === null || items === null) {
    return;
  }
  else {
    window.addEventListener('load', () => {
      if (!window.location.href.includes('#')) {
        return;
      }
      else {
        const mainEngineLinkId = window.location.href.split('#')[1];
  
        items.forEach((child) => child.classList.remove('engine-tabs__item--active'));
        buttons.forEach((child) => child.classList.remove('engine-tabs__button--active'));
  
        document.querySelector(`a[href='#${mainEngineLinkId}']`).classList.add('engine-tabs__button--active');
        document.getElementById(mainEngineLinkId).classList.add('engine-tabs__item--active');
      }
    })
  }
}

engineOpenLink(mainEngineTabsButtons, mainEngineTabsItems);

// Открытие определённого таба при переходе по ссылке из футера и нахождении на той же самой странице

function engineSamePageOpenLink(buttons, items) {

  if (buttons === null || items === null || !window.location.href.includes('#')) {
    return;
  }
  else {
    const engineFooterLinks = document.querySelectorAll(".footer-main__engine-link");
    
    engineFooterLinks.forEach((child) => {
      child.addEventListener('click', () => {
        items.forEach((child) => child.classList.remove('engine-tabs__item--active'));
        buttons.forEach((child) => child.classList.remove('engine-tabs__button--active'));

        document.querySelector(`a[href='#${child.href.split('#')[1]}']`).classList.add('engine-tabs__button--active');
        document.getElementById(child.href.split('#')[1]).classList.add('engine-tabs__item--active');
      })
    })
  }
}

engineSamePageOpenLink(mainEngineTabsButtons, mainEngineTabsItems);