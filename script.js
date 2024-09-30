document.addEventListener("DOMContentLoaded", function () {
  let showCursor = true;
  const cursor = document.getElementById("cursor");

  setInterval(() => {
    showCursor = !showCursor;
    cursor.style.visibility = showCursor ? "visible" : "hidden";
  }, 500);
});
