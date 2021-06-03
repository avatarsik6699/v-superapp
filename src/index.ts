import f from "./module";
import "./index.scss";

f();
async function start() {
  return await Promise.resolve("async work");
}

start().then(console.log);
