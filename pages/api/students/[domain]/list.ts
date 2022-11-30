import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "../../../../models";
import { ResponseFunctions } from "../../../../interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) =>
    res.status(400).json({ status: 0, error: error });
  const handleCase: ResponseFunctions = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      res
        .status(200)
        .json({ status: false, err: "Only GET Method is allowed" });
    },
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { domain } = req.query;
      const { Students } = await dbCon();
      const students = await Students.find({ domain: domain }).catch(catcher);
      if (students) {
        res.status(200).json({
          status: true,
          data: students,
        });
      } else {
        res.status(404).json({ status: false, err: "Account not found" });
      }
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
