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
      // Encrypt Password//
      const salt = bcrypt.genSaltSync(10);
      var hashedPassword = bcrypt.hashSync("admin", salt);
      // Encrypt Password//
      const { Accounts } = await dbCon();

      const created = await Accounts.create({
        university: "Enugu State University of Science and Technology",
        email: "agu.chux@yahoo.com",
        firstname: "Agu",
        lastname: "Chux",
        mobile: "08068573376",
        enabled: true,
        password: hashedPassword,
        accountType: AccountTypes.ADMIN,
        role: AccountRoles.VC,
      }).catch(catcher);
      if (created?._id) {
        res.status(200).json({ status: true, accid: created?.accid });
      } else {
        res
          .status(400)
          .json({ status: false, err: "Failed to create account" });
      }
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
