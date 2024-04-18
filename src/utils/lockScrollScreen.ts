export function lockScrollScreen(lock: boolean) {
  const scrollbarWidth = getScrollbarWidth();
  document.body.style.paddingRight = `${scrollbarWidth}px`;

  if (lock) {
    document.body.style.overflow = "hidden";
    document.body.style.minHeight = "100vh";
  } else {
    document.body.style.overflow = "";
    document.body.style.minHeight = "";
  }
}

function getScrollbarWidth() {
  const scrollDiv = document.createElement("div");

  scrollDiv.style.width = "100px";
  scrollDiv.style.height = "100px";
  scrollDiv.style.overflow = "scroll";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";

  document.body.appendChild(scrollDiv);

  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
