
    // Get the button
    let myButton = document.querySelector(".sc-casa-product-list__scroll");

    // Set initial style to "none"
    myButton.style.display = "none";

    // When the user scrolls down 250px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    var cardBoxes = document.querySelectorAll('.sc-casa-product-list__card-box');

    // Create a map to store max heights for each tag
    var maxHeights = new Map();

    // Iterate over each card
    for (var i = 0; i < cardBoxes.length; i++) {
        var cardTags = cardBoxes[i].getAttribute('data-tags').split(' ');

        // Iterate over each tag in the current card
        cardTags.forEach(function (tag) {
            if (!maxHeights.has(tag)) {
                maxHeights.set(tag, {
                    greenWrapper: 0,
                    title: 0,
                    description: 0
                });
            }

            var greenWrappers = cardBoxes[i].querySelectorAll('.sc-casa-product-list__green-wrapper');
            var titles = cardBoxes[i].querySelectorAll('.sc-casa-product-list__title');
            var descriptions = cardBoxes[i].querySelectorAll('.sc-casa-product-list__description');

            // Calculate maximum heights for each tag independently
            greenWrappers.forEach(function (greenWrapper) {
                maxHeights.get(tag).greenWrapper = Math.max(maxHeights.get(tag).greenWrapper, greenWrapper.clientHeight);
            });

            titles.forEach(function (title) {
                maxHeights.get(tag).title = Math.max(maxHeights.get(tag).title, title.clientHeight);
            });

            descriptions.forEach(function (description) {
                maxHeights.get(tag).description = Math.max(maxHeights.get(tag).description, description.clientHeight);
            });
        });
    }

    // Apply the maximum heights to all cards with the same tag
    cardBoxes.forEach(function (cardBox) {
        var cardTags = cardBox.getAttribute('data-tags').split(' ');

        cardTags.forEach(function (tag) {
            var greenWrappers = cardBox.querySelectorAll('.sc-casa-product-list__green-wrapper');
            var titles = cardBox.querySelectorAll('.sc-casa-product-list__title');
            var descriptions = cardBox.querySelectorAll('.sc-casa-product-list__description');


            // Apply the maximum heights to all cards with the same tag
            greenWrappers.forEach(function (greenWrapper) {
                greenWrapper.style.height = maxHeights.get(tag).greenWrapper + 'px';
            });

            titles.forEach(function (title) {
                title.style.height = maxHeights.get(tag).title + 'px';
            });

            descriptions.forEach(function (description) {
                description.style.height = maxHeights.get(tag).description + 'px';
            });
        });
    });


    document.addEventListener("DOMContentLoaded", function () {
        // Initialize by showing the first tab and first 6 offers
        showTab("all-accounts");

        // Event listener for tag clicks
        document.querySelectorAll(".sc-tag").forEach(function (tag) {
            tag.addEventListener("click", function (e) {
                e.preventDefault();
                // e.stopPropagation();
                var filter = tag.getAttribute("data-filter");
                showTab(filter);
            });
        });

        // Event listener for Load More click
        document
            .querySelector(".sc-casa-product-list__load-more")
            .addEventListener("click", function (e) {
                e.preventDefault();
                // e.stopPropagation();
                loadMore();
                let loadMoreBtn = document.querySelector(
                    ".sc-casa-product-list__load-more"
                );
                loadMoreBtn.style.display = "none";
            });

        function showTab(filter) {
            let loadMoreBtn = document.querySelector(
                ".sc-casa-product-list__load-more"
            );
            // Hide all product boxes
            document
                .querySelectorAll(".sc-casa-product-list__card-box")
                .forEach(function (box) {
                    box.style.display = "none";
                });

            // Show the selected category
            let allFilter = document.querySelectorAll(
                ".sc-casa-product-list__card-box[data-tags*='" + filter + "']"
            );
            allFilter.forEach(function (box, index) {
                box.style.display = index < 5 ? "flex" : "none";
            });
            console.log("allFilter", allFilter.length);
            loadMoreBtn.style.display = allFilter.length > 5 ? "flex" : "none";

            // Update active tag
            document.querySelectorAll(".sc-tag").forEach(function (tag) {
                tag.classList.remove("sc-tag--tag-color--active");
            });

            document
                .querySelector(".sc-tag[data-filter='" + filter + "']")
                .classList.add("sc-tag--tag-color--active");
        }

        function loadMore() {
            var currentFilter = document
                .querySelector(".sc-tag--tag-color--active")
                .getAttribute("data-filter");
            var visibleCount = document.querySelectorAll(
                ".sc-casa-product-list__card-box[data-tags*='" +
                currentFilter +
                "']:not([style*='none'])"
            ).length;

            // Show the next 6 offers
            document
                .querySelectorAll(
                    ".sc-casa-product-list__card-box[data-tags*='" + currentFilter + "']"
                )
                .forEach(function (box, index) {
                    if (index >= visibleCount && index < visibleCount + 10) {
                        box.style.display = "flex";
                    }
                });
        }
    });