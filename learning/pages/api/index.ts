import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../users";

type Data = {
  name: string;
};

const User = [
  {
    name: "Ritvik Shukla",
    email: "ritvik@gmail.com",
    age: 21
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  if (req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ users: User }));
  }
  if (req.method === "POST") {
    const { name } = req.body;
    User.push(name);
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ users: User }));
  }
}
