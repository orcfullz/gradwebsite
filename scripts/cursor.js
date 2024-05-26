export const initializeCursor = () => {
  const mouse = { x: 0, y: 0 };
  const cursor = document.querySelector('.cursor.small');

  const moveCursor = (e) => {
      mouse.y = e.clientY;
      mouse.x = e.clientX;
      const width = cursor.offsetWidth;
      cursor.style.transform = `translate3d(${mouse.x - width / 2}px, ${mouse.y - width / 2}px, 0)`;
  };

  window.addEventListener('mousemove', moveCursor);

  document.querySelectorAll("a, .clickable, .designer-element, #arrow-down, #arrow-right").forEach(d => {
      d.addEventListener("mouseenter", () => {
          cursor.classList.add("link");
          cursor.classList.add("enlarged");
      });

      d.addEventListener("mouseleave", () => {
          cursor.classList.remove("link");
          cursor.classList.remove("enlarged");
      });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initializeCursor();
});
