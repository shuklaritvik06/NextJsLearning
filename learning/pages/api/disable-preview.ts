import { NextApiRequest, NextApiResponse } from "next";
export default function handle(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData({});
  res.redirect(req.query.redirect as string);
}
