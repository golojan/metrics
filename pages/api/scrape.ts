import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFunctions } from "../../interfaces";

const cheerio = require("cheerio");

import { GSRanking } from "../../interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) =>
    res.status(400).json({ status: 0, error: error });
  const handleCase: ResponseFunctions = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      res
        .status(200)
        .json({ status: false, err: "Only POST Method is allowed" });
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const url = req.body.url;
      //   console.log(url);
      try {
        const response = await fetch(url);
        const htmlString = await response.text();
        const $ = cheerio.load(htmlString);

        const keys = [];
        const result: any = [];

        $(`td.gsc_rsb_std`).each((idx: number, ref: any) => {
          const value = $(ref).text().trim();
          keys.push(idx);
          result[idx] = value;
        });
        res.status(200).json({
          status: true,
          ranking: {
            citations: result[0],
            hindex: result[2],
            i10hindex: result[4],
          } as GSRanking,
        });
      } catch (e) {
        res.status(404).json({
          status: false,
          error: `no data found. Tip: Double check the url.`,
          followerCount: -1,
        });
      }
    },
  };

  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
