import { Res } from "../api/res";

export function pathCheck(req: any, res: any, next: any) {
  if (adminCheck(req.session?.user?.role, req.url)) {
    next();
  } else {
    Res.failure(res, "无权访问");
  }
}

const 权限表 = [{ match: /\/article\/update/, role: "admin" }] as { match: RegExp; role: string }[];

function adminCheck(path: string, role: string): boolean {
  const item = 权限表.find((el) => {
    return el.match.test(path);
  });
  if (item) {
    return item.role === role;
  } else {
    return true;
  }
}
