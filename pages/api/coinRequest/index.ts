import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export function buildCoinRequestPath() {
  return path.join(process.cwd(), "data", "coinRequest.json");
}

export function extractCoinRequest(filePath: fs.PathOrFileDescriptor) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData.toString());
  return data;
}

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const email = req.body.email;
    const cryptoCurrencyName = req.body.cryptoCurrencyName;
    const description = req.body.description;

    if (email && cryptoCurrencyName && description) {
      const newCoinRequest = {
        id: new Date().toISOString(),
        email: email,
        cryptoCurrencyName: cryptoCurrencyName,
        description: description,
      };

      const filePath = buildCoinRequestPath();
      const data = extractCoinRequest(filePath);
      data.push(newCoinRequest);
      fs.writeFileSync(filePath, JSON.stringify(data));
      res
        .status(201)
        .json({ message: "Success!", coinRequest: newCoinRequest });
    } else
      res
        .status(400)
        .json({ isError: true, message: "Please fill all fields." });
  } else {
    const filePath = buildCoinRequestPath();
    const data = extractCoinRequest(filePath);
    res.status(200).json({ coinRequest: data });
  }
}

export default handler;
