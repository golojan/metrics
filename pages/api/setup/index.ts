import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFunctions } from "../../../interfaces";
import { dbCon } from "../../../models";
import { AccountTypes, AccountRoles } from "../../../interfaces/enums";

const bcrypt = require("bcryptjs");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher: any = (error: Error) =>
    res.status(400).json({ status: false, error: error });
  const handleCase: ResponseFunctions = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Schools, Accounts } = await dbCon();

      const created = await Schools.create({
        domain: "metrics.ng",
        name: "Metrics AI Ranking System",
        shortname: "METRICS",
      }).catch(catcher);

      if (created._id) {
        // Encrypt Password//
        const salt = bcrypt.genSaltSync(10);
        var hashedPassword = bcrypt.hashSync("admin", salt);
        // Encrypt Password//
        const account = await Accounts.create({
          schoolid: created._id,
          email: "admin@metrics.ng",
          firstname: "Metrics",
          lastname: "Admin",
          role: AccountRoles.OWNER,
          accountType: AccountTypes.OWNER,
          mobile: "08068573376",
          enabled: true,
          password: hashedPassword,
        }).catch(catcher);

        if (account?._id) {
          res.status(200).json({
            status: true,
            schoolid: created?._id,
            accid: account?._id,
          });
        } else {
          res
            .status(400)
            .json({ status: false, err: "Failed to create account" });
        }
      } else {
        res.status(400).json({ status: false, err: "Failed to create School" });
      }
      res.status(200).json({ status: true });
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
