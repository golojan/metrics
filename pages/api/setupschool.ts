import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFunctions } from "../../interfaces";
import { dbCon } from "../../models";
import { AccountTypes, AccountRoles } from "../../interfaces/enums";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) => res.status(400).json({ error });
  const handleCase: ResponseFunctions = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Schools } = await dbCon();
      const created = await Schools.create({
        domain: "localhost",
        name: "Enugu State University of Science and Technology",
        shortname: "ESUT",
      }).catch(catcher);
      if (created?._id) {
        res.status(200).json({ status: true, schoolid: created?._id });
      } else {
        res.status(400).json({ status: false, err: "Failed to create School" });
      }
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
