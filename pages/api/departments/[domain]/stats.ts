import { Gender, LecturerType } from "../../../../interfaces/enums";
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
      const { Departments } = await dbCon();

      const count = await Departments.count({
        domain: domain,
      }).catch(catcher);

      const countAccredited = await Departments.count({
        domain: domain,
        accredited: true,
      }).catch(catcher);

      const countNonAccredited = await Departments.count({
        domain: domain,
        accredited: false,
      }).catch(catcher);

      res.status(200).json({
        status: true,
        count: count,
        countAccredited: countAccredited,
        countNonAccredited: countNonAccredited,
      });
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
