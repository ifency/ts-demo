export function getEntry() {
  let globPath = "src/**/*.html";
  let pathDir = "src(/|\\\\)(.*?)(/|\\\\)";
  let files = glob.sync(globPath);
  console.log("🚀 ~ file: utils.js ~ line 5 ~ getEntry ~ files", files);
  let dirname = "";
  let entries = [];
  for (let i = 0; i < files.length; i++) {
    dirname = path.dirname(files[i]);
    entries.push(dirname.replace(new RegExp("^" + pathDir), "$2"));
  }
  return entries;
}
