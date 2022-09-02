//Табы на странице consult

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

function consultOpenLink(buttons, items) {
  if (buttons === null || items === null) {
    return;
  }
  else {
    window.addEventListener('load', () => {
      if (!window.location.href.includes('#')) {
        return;
      }
      else {
        const mainConsultLinkId = window.location.href.split('#')[1];
  
        items.forEach((child) => child.classList.remove('consult-tabs__item--active'));
        buttons.forEach((child) => child.classList.remove('consult-tabs__button--active'));
  
        document.querySelector(`a[href='#${mainConsultLinkId}']`).classList.add('consult-tabs__button--active');
        document.getElementById(mainConsultLinkId).classList.add('consult-tabs__item--active');
      }
    })
  }
}

consultOpenLink(mainConsultTabsButtons, mainConsultTabsItems);

// Открытие определённого таба при переходе по ссылке из футера и нахождении на той же самой странице

function consultSamePageOpenLink(buttons, items) {

  if (buttons === null || items === null || !window.location.href.includes('#')) {
    return;
  }
  else {
    const consultFooterLinks = document.querySelectorAll(".footer-main__consult-link");
    
    consultFooterLinks.forEach((child) => {
      child.addEventListener('click', () => {
        items.forEach((child) => child.classList.remove('consult-tabs__item--active'));
        buttons.forEach((child) => child.classList.remove('consult-tabs__button--active'));

        document.querySelector(`a[href='#${child.href.split('#')[1]}']`).classList.add('consult-tabs__button--active');
        document.getElementById(child.href.split('#')[1]).classList.add('consult-tabs__item--active');
      })
    })
  }
}

consultSamePageOpenLink(mainConsultTabsButtons, mainConsultTabsItems);