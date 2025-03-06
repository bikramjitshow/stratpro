class ScTulu {
  init() {
    // For each tab group
    const tabGroups = document.querySelectorAll('.sc-tulu-camp-tab');

    tabGroups.forEach(group => {
      // Get all the tabs in this tab group
      const tabs = group.querySelectorAll('.sc-tulu-camp-tab__head-button');
      // Get all the content items in this tab group
      const contents = group.querySelectorAll('.sc-tulu-camp-tab__content-item');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const targetId = tab.getAttribute('data-tab-btn-id');
          const targetContent = group.querySelector(
            `.sc-tulu-camp-tab__content-item[data-tab-content="${targetId}"]`
          );

          if (!targetContent) {
            console.error(`Target content for tab ${targetId} not found`);
            return;
          }

          // Remove active class from all tabs and content items in this tab group
          tabs.forEach(t => t.classList.remove('sc-tulu-camp-tab__head-button--active'));
          contents.forEach(c => c.classList.remove('sc-tulu-camp-tab__content-item--active'));

          // Add active class to clicked tab and corresponding content
          tab.classList.add('sc-tulu-camp-tab__head-button--active');
          targetContent.classList.add('sc-tulu-camp-tab__content-item--active');
        });
      });
    });
    const startButton = document.getElementById('sc-get-started-btn');
    const getStartedModal = document.getElementById('sc-get-started');
    const tcModal = document.getElementById('sc-terms-and-condition');
    const scrollButton = document.getElementById('sc-scroll-tc-btn');
    const cardMain = document.querySelectorAll('.sc-tulu-camp-product-card__main');
    const mainPage = document.querySelectorAll('.sc-tulu-camp-main');
    const backBtn = document.querySelector('.sc-tulu-camp-header__back');

    console.log(startButton, getStartedModal, tcModal); // Add this log to check if elements are null

    if (startButton && getStartedModal && tcModal) {
      console.log('neeraj');
      startButton.addEventListener('click', () => {
        getStartedModal.classList.remove('visible');
        tcModal.classList.add('visible');
      });
      scrollButton.addEventListener('click', () => {
        tcModal.classList.remove('visible');
      });
      cardMain.forEach(card => {
        card.addEventListener('click', () => {
          mainPage[0].classList.remove('active');
          mainPage[1].classList.add('active');
        });
      });

      backBtn.addEventListener('click', () => {
        mainPage[1].classList.remove('active');
        mainPage[0].classList.add('active');
      });
    }
  }
}

const instance = new ScTulu();
instance.init();
export default instance;
