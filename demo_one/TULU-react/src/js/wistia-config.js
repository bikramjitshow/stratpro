/* global _wq, Wistia */
class WistiaConfig {
  init() {
    window._wq = window._wq || [];
    _wq.push({
      id: '_all',
      options: {
        videoFoam: true,
        playBar: true,
        qualityControl: false,
        playerColor: '#333333'
      },
      onReady: function(video) {
        let volumeItems = document.querySelectorAll(
          '.w-control-bar__region--right .w-control-bar__region--volume'
        );
        for (let i = 0; i < volumeItems.length; ++i) {
          volumeItems[i]
            .closest('.w-control-bar')
            .querySelectorAll('.w-control-bar__region--left')
            .appendChild(volumeItems[i]);
        }

        let timePositionerItems = document.querySelectorAll('.wistia_time_positioner');
        for (let i = 0; i < timePositionerItems.length; ++i) {
          timePositionerItems[i].className += ' ' + 'hide-for-mobile';
          timePositionerItems[i]
            .closest('.w-control-bar')
            .querySelectorAll('.w-control-bar__region--left')
            .appendChild(timePositionerItems[i]);
        }

        let controlSettings = document.querySelectorAll('.w-control--settings');
        for (let i = 0; i < controlSettings.length; ++i) {
          let elementToRemove = controlSettings[i].closest('.w-control-bar__region');
          elementToRemove.parentElement().removeChild(elementToRemove);
        }

        // for all existing and future videos, run this function
        video.bind('play', function() {
          // when one video plays, iterate over all the videos and pause each,
          // unless it's the video that just started playing or it's a background video.
          let allVideos = Wistia.api.all();
          for (let i = 0; i < allVideos.length; i++) {
            if (
              allVideos[i].hashedId() !== video.hashedId() &&
              !document
                .querySelector('[id^="wistia-' + allVideos[i].hashedId() + '"]')
                .classList.contains('backgroundVideo')
            ) {
              allVideos[i].pause();
            }
          }
        });

        // upon scrolling check all for visibility and pause those not visible
        window.addEventListener('scroll', function() {
          let allVideos = Wistia.api.all();
          for (let i = 0; i < allVideos.length; i++) {
            const id = allVideos[i].hashedId(),
              elem_id = 'wistia-' + id;

            // do not pause the video if it is background video
            let isBackgroundVideo = document
              .querySelector('[id^="' + elem_id + '"]')
              .classList.contains('backgroundVideo');
            if (isBackgroundVideo) {
              continue;
            }

            let is_visible = false;
            let videoElement = document.querySelector('[id^="' + elem_id + '"] video');
            if (videoElement) {
              let videoElementPosition = videoElement.getBoundingClientRect();
              // checking whether the video is fully visible
              is_visible =
                videoElementPosition.top >= 0 && videoElementPosition.bottom <= window.innerHeight;
            }
            if (!is_visible) {
              allVideos[i].pause();
            }
          }
        });
      }
    });
  }
}

const instance = new WistiaConfig();
document.addEventListener('DOMContentLoaded', () => {
  instance.init();
});

export default instance;
