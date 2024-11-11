const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabList.addEventListener('click', (e) => {
    const clickedTab = e.target.closest('[role="tab"]');

    if (!clickedTab) {
        return;
    }

    e.preventDefault();

    switchTab(clickedTab);
});

tabList.addEventListener('keydown', (e) => {
    const currentTab = e.target.closest('[role="tab"]');

    if (!currentTab) {
        return;
    }

    let newTab;

    switch (e.key) {
        case 'ArrowLeft':
            newTab = currentTab.previousElementSibling || tabs[tabs.length - 1];
        break;
        case 'ArrowRight':
            newTab = currentTab.nextElementSibling || tabs[0];
        break;
        case 'Home':
            newTab = tabs[0];
        break;
        case 'End':
            newTab = tabs[tabs.length - 1];
        break;
        default:
            return;
    }

    switchTab(newTab);
    
    newTab.focus();
});

function switchTab(newTab) {
    const activePanelId = newTab.getAttribute('aria-controls');
    const activePanel = document.getElementById(activePanelId);

    tabs.forEach((tab) => {
        tab.setAttribute('aria-selected', false);
        tab.setAttribute('tabindex', '-1');
    });

    tabPanels.forEach((panel) => {
        panel.hidden = true;
    });

    newTab.setAttribute('aria-selected', true);
    newTab.setAttribute('tabindex', '0');
    activePanel.hidden = false;
}