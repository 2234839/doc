import { Res } from "../../../lib/api/res";

export async function post(req: any, res: any) {
    console.log(req.body);

  if (req.body.username === "崮生" && req.body.password === "llej987456321") {
    req.session.user = {
      role: "admin",
    };
    Res.successful(res, "登录成功", { s: req.session });
  } else {
    Res.failure(res, "登录失败", { s: req.session });
  }
}