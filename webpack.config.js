const path = require("path");
//node.js的path核心模块，保证在项目目录下创建dist文件夹

const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入插件,自动在打包生成的dist文件夹下生成html文件

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 清除打包前dist目录

module.exports = {
  mode: "development", //开发环境
  devtool: "eval-cheap-module-source-map", //开启sourceMap映射关系，代码报错可以在源代码中找寻
  //   mode: 'production',    //生产环境
  //   devtool: 'cheap-module-source-map',
  // 入口
  entry: {
    main: "./src/index.js",
    // sub: "./src/index.js",
  },
  //启动服务器，自动打包
  devServer: {
    // contentBase: "./dist", //内容在dist目录拿
    static: "./dist", //webpack-dev-server 3版本使用contentBase
    // hot: true, //3.x版本默认不启动HMR模块热更新
    proxy: {
      //实现请求转发
      "/api/Yixiantong": {
        target: "http://study.jsplusplus.com/",
        pathRewrite: {
          //重写路径，去掉请求路径中的api字符串
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", //把es6代码转换为低版本浏览器可识别代码
          options: {
            presets: [
              [
                "@babel/preset-env", //转换规则在@babel/preset-env里面
                {
                  useBuiltIns: "usage", //告诉@babel/polyfill按需转换业务中使用到的ES6代码,没有此配置加入全部polyfill使打包体积变大
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(jpg|png|gif)$/, //配置loader以处理除js以外的文件
        use: {
          //   loader: "file-loader",
          loader: "url-loader",
          //url-loader会把图片打包成base64格式加入到打包后的js文件中,
          //dist少了图片文件，减少一次图片的http请求
          //如果图片过大会导致打包后的js文件过大，页面加载时间很长，出现空白页面
          options: {
            name: "[name].[ext]",
            //占位符以原图片名称和后缀打包,可以加上hash值[name]_[hash].[ext]
            outputPath: "images/", //图片打包到dist目录images文件夹下
            limit: 2048,
            //如果图片大于2048个字节，就生成图片文件，小于就以base64加入到js文件中
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          //   {
          //     loader: "css-loader",
          //     options: { modules: true }, //css模块化
          //   },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ], //从下往上//css-loader处理css文件，style-loader把生成的css代码放到html文件中
      },
      //   {
      //     test: /.(ttf|woff|woff2)/,
      //     use: "file-loader", //打包图标字体文件
      //   },
    ],
  },
  //   出口
  output: {
    // publicPath: "http://cdn.xxx.com/",
    //给打包出的js文件在html中引入时添加前缀
    path: path.resolve(__dirname, "dist"),
    // filename: "[name].js", //占位符，打包出多个文件
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      //以src目录下index.html为模板生成dist目录下html文件
      cache: false,
    }),
    new CleanWebpackPlugin(),
  ],
};

// 源代码改变时自动打包，在package.json里面scripts里配置watch(npm run watch)，将htmlwebpackplugin缓存cache设置false
// webpack-dev-server启动一个服务器，自动打包代码
