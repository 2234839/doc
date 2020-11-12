// http://192.168.11.2/bool_dev_team/npp_beta/issues/63
// https://github.com/2234839/wxtool/issues/1

export function 去除思源笔记id的路径(path: string) {
  if (path.endsWith(".sy.md")) {
    return path.slice(0, -29) + ".md";
  } else {
    return path;
  }
}

export function 获取思源笔记id的路径(path: string) {
  return path.slice(-28, -6);
}
