import { Gender } from "../../../../interfaces/enums";
import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFunctions } from "../../../../interfaces";
import { dbCon } from "../../../../models";

import { faker } from "@faker-js/faker";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) => res.status(400).json({ error });
  const handleCase: ResponseFunctions = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { sex, type } = req.query;

      const { Schools } = await dbCon();
      const gender = sex == Gender.MALE ? "male" : "female";

      const created = await Schools.create({
        avatar: faker.image.avatar(),
        regNumber: faker.random.numeric(10),
        firstname: faker.name.firstName(gender),
        lastname: faker.name.lastName(gender),
        mobile: faker.phone.number(),
        email: faker.internet.email(),
        gender: sex,
        studentType: type,
        enabled: true,
      }).catch(catcher);
      if (created?._id) {
        res.status(200).json({ status: true, accid: created?._id });
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