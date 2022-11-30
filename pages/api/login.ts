import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFunctions } from "../../interfaces";
import { dbCon } from "../../models";
import { getDomain } from "../../utils/queries";

const bcrypt = require("bcryptjs");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) => res.status(400).json({ error });
  const handleCase: ResponseFunctions = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { username, password } = req.body;

      // Try capture domain //
      const { host } = req.headers;
      const domain = getDomain(host as string);
      // Try capture domain //

      const { Accounts, Schools } = await dbCon();

      // Get the School info with domain //
      let schoolid: string = "";
      const school = await Schools.findOne({ domain: domain }).catch(catcher);
      if (school) {
        schoolid = school._id;
      }
      // Get the School info with domain //
      await Accounts.findOne({
        schoolid: schoolid,
        email: username,
      })
        .then((account) => {
          if (account) {
            const isPasswordValid = bcrypt.compareSync(
              password,
              account.password
            );
            if (isPasswordValid) {
              res
                .status(200)
                .json({ status: true, token: account._id, domain: domain });
            } else {
              res.status(400).json({ status: false, domain: domain });
            }
          } else {
            res.status(400).json({ status: false, domain: domain });
          }
        })
        .catch(catcher);
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
