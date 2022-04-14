const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");

function getEntry() {
  let globPath = "src/**/*.html";
  let pathDir = "src(/|\\\\)(.*?)(/|\\\\)";
  let files = glob.sync(globPath);
  let dirname = "";
  let entries = [];
  for (let i = 0; i < files.length; i++) {
    dirname = path.dirname(files[i]);
    entries.push(dirname.replace(new RegExp("^" + pathDir), "$2"));
  }
  return entries;
}

function addEntry() {
  let entryObj = {
    main: "./src/index.ts",
  };
  getEntry().forEach((item) => {
    const key = item.slice(item.indexOf("/") + 1);
    entryObj[key] = path.resolve(__dirname, item, "index.ts");
  });
  return entryObj;
}

process.env.NODE_ENV = "development";

const config = {
  entry: addEntry(),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [],
  devServer: {
    static: "./",
  },
};

const mainHtml = {
  template: "./index.html",
  filename: "index.html",
  chunks: ["main"],
};
config.plugins.push(new HtmlWebpackPlugin(mainHtml));
getEntry().forEach((item) => {
  const key = item.slice(item.indexOf("/") + 1);
  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${key}.html`,
      template: path.resolve(__dirname, item, "index.html"),
      chunks: [key],
    })
  );
});

module.exports = config;
