function Content() {
  const app = document.getElementById("app");
  const content = document.createElement("div");
  content.innerHTML = "Content";
  app.appendChild(content);
}
export default Content;
