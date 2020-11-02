//@ts-ignore
import * as sapper from "@sapper/app";
import { updateStore } from "./data/store/store";

const target = document.querySelector("#sapper");
updateStore();

sapper.start({
  target,
});
