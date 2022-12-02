import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFunctions } from "../../../interfaces";
import { dbCon } from "../../../models";
import { getDomain } from "../../../utils/queries";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) => res.status(400).json({ error });
  const handleCase: ResponseFunctions = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      // Try capture domain //
      const { host } = req.headers;
      const domain = getDomain(host as string);
      // Try capture domain //

      const { Schools } = await dbCon();

      // Get the School info with domain //
      const school = await Schools.findOne({ domain: domain }).catch(catcher);
      if (school) {
        res.status(200).json({ status: true, domain: domain, data: school });
      } else {
        res.status(400).json({ status: false });
      }
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
