import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFunctions } from "../../interfaces";
import { dbCon } from "../../models";

const bcrypt = require("bcryptjs");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) => res.status(400).json({ error });
  const handleCase: ResponseFunctions = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { domain, username, password } = req.body;
      const { Schools } = await dbCon();

      await Schools.findOne({
        domain: domain,
      })
        .then((school) => {
          // Check if school document dropped //
          if (school) {
            let account = school.accounts
              .filter((user: any) => {
                return user.email === username;
              })
              .pop();
            if (account) {
              // Check if account document dropped //
              const isPasswordValid = bcrypt.compareSync(
                password,
                account.password
              );
              if (isPasswordValid) {
                // Check if [password] matched //
                res.status(200).json({ status: true, token: account._id });
              } else {
                res.status(400).json({ status: false });
              }
            } else {
              res.status(400).json({ status: false });
            }
          } else {
            res.status(400).json({ status: false });
          }
        })
        .catch(catcher);
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
