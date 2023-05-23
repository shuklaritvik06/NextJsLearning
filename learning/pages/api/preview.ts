import { NextApiRequest, NextApiResponse } from "next";
export default function handle(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({ data: "Hello Data" });
  res.redirect(req.query.redirect as string);
}
