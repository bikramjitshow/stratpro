class ScProductApply {
  init() {
    const that = this;
    // Event listener for clicks on elements with data-modal-source attribute
    document.body.addEventListener('click', function(event) {
      const closest = event.target.closest('[data-modal-source]');
      if (closest) {
        setTimeout(() => {
          that.setMaxHeightToAll();
        }, 50);
      }
    });
  }

  setMaxHeightToAll() {
    // Check viewport width
    if (window.innerWidth > 680) {
      // Select all .sc-product-apply__col--equal-height elements within .sc-modal--show
      const columns = document.querySelectorAll(
        '.sc-modal--show .sc-product-apply__col--equal-height'
      );
      let maxHeight = 0;

      if (columns.length) {
        // First pass: find the maximum height
        columns.forEach(column => {
          const firstTextDiv = column.querySelector('.sc-product-apply__text');
          if (firstTextDiv) {
            const height = firstTextDiv.clientHeight;
            if (height > maxHeight) {
              maxHeight = height;
            }
          }
        });

        // Second pass: apply the maximum height
        columns.forEach(column => {
          const firstTextDiv = column.querySelector('.sc-product-apply__text');
          if (firstTextDiv) {
            firstTextDiv.style.height = `${maxHeight}px`;
          }
        });
      }
    }
  }
}

const instance = new ScProductApply();
window.addEventListener('load', function() {
  instance.init();
});
export default instance;
