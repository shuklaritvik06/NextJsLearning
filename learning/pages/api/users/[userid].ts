import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const User = [
  {
    name: "Ritvik Shukla",
    email: "ritvik@gmail.com",
    age: 21
  },
  {
    name: "Ramesh Shukla",
    email: "ritvik@gmail.com",
    age: 21
  },
  {
    name: "Rakesh Shukla",
    email: "ritvik@gmail.com",
    age: 21
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    user: Data;
  }>
) {
  const { userid } = req.query;
  res.status(200).json({
    user: User[parseInt(userid as string)]
  });
}
