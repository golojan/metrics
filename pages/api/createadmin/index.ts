import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFunctions } from "../../../interfaces";
import { dbCon } from "../../../models";

const bcrypt = require("bcryptjs");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) => res.status(400).json({ error });
  const handleCase: ResponseFunctions = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Schools, Accounts } = await dbCon();
      const created = await Schools.create({
        owner: true,
        domain: "metrics.ng",
        name: "Metrics AI Ranking Engine",
        shortname: "METRICS",
      }).catch(catcher);
      if (created) {
        // Encrypt Password//
        const salt = bcrypt.genSaltSync(10);
        var hashedPassword = bcrypt.hashSync("admin", salt);
        // Encrypt Password//
        const account = await Accounts.create({
          schoolid: created._id,
          email: "admin@metrics.ng",
          firstname: "Metrics",
          lastname: "Admin",
          mobile: "07068573376",
          enabled: true,
          password: hashedPassword,
        }).catch(catcher);

        if (account) {
          res.status(200).json({
            status: true,
            accid: account._id,
            schoolid: created._id,
          });
        } else {
          res
            .status(400)
            .json({ status: false, err: "Failed to create Account" });
        }
      } else {
        res.status(400).json({ status: false, err: "Failed to create School" });
      }
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
