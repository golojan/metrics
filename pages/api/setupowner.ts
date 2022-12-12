import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFunctions } from "../../interfaces";
import { dbCon } from "../../models";
import { AccountTypes, AccountRoles } from "../../interfaces/enums";

const bcrypt = require("bcryptjs");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) => res.status(400).json({ error });
  const handleCase: ResponseFunctions = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      //
      // Encrypt Password//
      const salt = bcrypt.genSaltSync(10);
      var hashedPassword = bcrypt.hashSync("admin", salt);
      // Encrypt Password//
      const { Accounts } = await dbCon();
      const created = await Accounts.create({
        schoolid: "638a7617dfa1be141ca74281",
        email: "admin@yhttps://www.metrics.ng/",
        firstname: "Metrics",
        lastname: "Admin",
        role: AccountRoles.OWNER,
        accountType: AccountTypes.OWNER,
        mobile: "08068573376",
        enabled: true,
        password: hashedPassword,
      }).catch(catcher);

      if (created?._id) {
        res.status(200).json({ status: true, accid: created?._id });
      } else {
        res.status(400).json({ status: false, err: "Failed to create School" });
      }
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
