import picture from "./picture.jpg";
import styles from "./index.scss";
function createPicture() {
  let img = new Image();
  img.src = picture;
  img.className += `${styles.picture}`;
  const app = document.getElementById("app");
  app.appendChild(img);
}
export default createPicture;
