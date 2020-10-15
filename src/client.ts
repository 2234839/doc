import * as sapper from "@sapper/app";

const target = document.querySelector("#sapper");
console.log("[target]",document, target);
sapper.start({
  target,
});
