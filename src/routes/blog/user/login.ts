import { Res } from "../../../lib/api/res";

export async function post(req: any, res: any) {
  if (req.body.username === "崮生" && false) {
    req.session.user = {
      role: "admin",
    };
    Res.successful(res, "登录成功", { s: req.session });
  } else {
    Res.failure(res, "登录失败", { s: req.session });
  }
}
