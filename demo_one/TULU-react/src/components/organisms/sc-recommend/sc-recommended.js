import { handleAnalyticsCTA } from '../../../js/sc-common-methods';

class ScRecommended {
  init() {
    this.recommend = document.querySelector('.sc-recommend');
    this.displayCard = this.recommend?.dataset.displayCard || 0;
    this.tabs = this.recommend?.querySelectorAll('.sc-filter__btn') || [];
    this.items = this.recommend?.querySelectorAll('.sc-card-tile') || [];

    if (!this.recommend) return;
    // Initialize with the first tab's type
    const initialTab = this.tabs[0];

    if (initialTab) {
      this.toggleCards(initialTab.dataset.tabName);
      initialTab.classList.add('sc-filter__btn--active');
    }

    // Add click event listeners to each tab
    this.tabs.forEach(tab => {
      tab.addEventListener('click', event => this.onTabClick(event, tab));
    });
  }

  onTabClick(event, tab) {
    event.preventDefault();
    event.stopPropagation();
    this.toggleCards(tab.dataset.tabName);
    this.updateActiveTab(tab);

    // Handle analytics for the tab click
    handleAnalyticsCTA(event);
  }

  updateActiveTab(activeTab) {
    this.tabs.forEach(tab => tab.classList.toggle('sc-filter__btn--active', tab === activeTab));
  }

  toggleCards(tabType) {
    let cardCount = 0;

    this.items.forEach(item => {
      const matchesTab = item.dataset.itemName?.split(',').includes(tabType);
      console.log(matchesTab, cardCount, this.displayCard);
      item.classList.toggle('sc-card-tile--active', matchesTab && cardCount < this.displayCard);
      if (matchesTab) cardCount++;
    });
  }
}

const instance = new ScRecommended();
window.addEventListener('load', function() {
  instance.init();
});

export default instance;
