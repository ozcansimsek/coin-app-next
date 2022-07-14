import { NextApiRequest, NextApiResponse } from "next";
import { buildCoinRequestPath, extractCoinRequest } from ".";

function handler(req: NextApiRequest, res: NextApiResponse) {
  const coinRequestId = req.query.coinRequestId;
  const filePath = buildCoinRequestPath();
  const coinRequestData = extractCoinRequest(filePath);
  const selectedCoinRequest = coinRequestData.find(
    (request: any) => request.id === coinRequestId
  );
  res.status(200).json({ coinRequest: selectedCoinRequest });
}

export default handler;
