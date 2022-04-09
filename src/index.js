// import Header from "./header.js"; //浏览器不认识import语法，借助webpack
// import Content from "./content.js";
// import Footer from "./footer.js";
// import picture from "./picture.jpg"; //webpack默认不认识除js以外文件
// // import "./index.css";
// // import "./index.scss"; //全局引入
// import styles from "./index.scss";
// import createPicture from "./createPicture.js";
// // 文件之间的依赖关系更加清晰，且只发送一次http请求

// // 面向过程 --> 面向对象
// new Header();
// new Content();
// new Footer();

// //创建img
// createPicture();
// //创建img
// let img = new Image();
// img.src = picture;
// img.className += `${styles.picture}`; //模板字符串引用变量
// const app = document.getElementById("app");
// app.appendChild(img);

// 字体图标
// import "./index.scss"; //全局引入
// const app = document.getElementById("app");
// app.innerHTML = "<div class='iconfont icon-dianzan'>Hello</div>";
// console.log("下次一定下次一定");

// import axios from "axios";
// //配置devServer的proxy，实现请求转发(相对路径)
// axios.get("/Yixiantong/getHomeDatas").then(({ data }) => {
//   console.log(data);
// });

// import "./HMR.css";
// const myButton = document.createElement("button");
// myButton.innerText = "新增";
// document.body.appendChild(myButton);
// myButton.addEventListener("click", () => {
//   const myDiv = document.createElement("div");
//   myDiv.innerText = "item";
//   document.body.appendChild(myDiv);
// });

// js的HRM热更新
// import counter from "./counter.js";
// import number from "./number.js";
// counter();
// number();
// if (module.hot) {
//   //监听要渲染的数据
//   module.hot.accept("./number.js", () => {
//     const numberDiv = document.getElementById("number"); //删除之前number函数生成的div
//     document.body.removeChild(numberDiv);
//     number();
//   });
// }

import "@babel/polyfill";
const promiseArr = [new Promise(() => {}), new Promise(() => {})];
promiseArr.map((promise) => {
  console.log(promise);
});
