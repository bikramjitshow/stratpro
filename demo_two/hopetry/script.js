const beeModel = document.querySelector("#bee-model");
const sections = Array.from(document.querySelectorAll("section"));

const shiftPositions = [0, -20, 0, 25];

const sectionOffsets = sections.map((section) => section.offsetTop);
const lastSectionsIndex = sections.length - 1;

const interpolate = (start, end, progress) => start + (end - start) * progress;

const getScrollProgress = (scrollY) => {
  for (let i = 0; i < lastSectionsIndex; i++) {
    if (scrollY >= sectionOffsets[i] && scrollY < sectionOffsets[i + 1]) {
      return (
        i +
        (scrollY - sectionOffsets[i]) /
          (sectionOffsets[i + 1] - sectionOffsets[i])
      );
    }
  }
  return lastSectionsIndex;
};

window.addEventListener("scroll", () => {
  const scrollProgress = getScrollProgress(window.scrollY);
  const sectonIndex = Math.floor(scrollProgress);
  const sectionPogress = scrollProgress - sectonIndex;

  const currentShift = interpolate(
    shiftPositions[sectonIndex],
    shiftPositions[sectonIndex + 1] ?? shiftPositions[sectonIndex],
    sectionPogress
  );

  beeModel.style.transform = `translateX(${currentShift}%)`;
});
