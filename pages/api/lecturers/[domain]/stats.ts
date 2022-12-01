import { Gender, LecturerType } from "./../../../../interfaces/enums";
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
      const { Lecturers } = await dbCon();

      const count = await Lecturers.count({
        domain: domain,
      }).catch(catcher);

      const countLocal = await Lecturers.count({
        domain: domain,
        lecturerType: LecturerType.LOCAL,
      }).catch(catcher);

      const countIntl = await Lecturers.count({
        domain: domain,
        lecturerType: LecturerType.INTERNATIONAL,
      }).catch(catcher);

      const countMale = await Lecturers.count({
        domain: domain,
        gender: Gender.MALE,
      }).catch(catcher);

      const countFemale = await Lecturers.count({
        domain: domain,
        gender: Gender.FEMALE,
      }).catch(catcher);

      const countLocalFemale = await Lecturers.count({
        domain: domain,
        gender: Gender.FEMALE,
        lecturerType: LecturerType.LOCAL,
      }).catch(catcher);

      const countLocalMale = await Lecturers.count({
        domain: domain,
        gender: Gender.MALE,
        lecturerType: LecturerType.LOCAL,
      }).catch(catcher);

      const countIntlFemale = await Lecturers.count({
        domain: domain,
        gender: Gender.FEMALE,
        lecturerType: LecturerType.INTERNATIONAL,
      }).catch(catcher);

      const countIntlMale = await Lecturers.count({
        domain: domain,
        gender: Gender.MALE,
        lecturerType: LecturerType.INTERNATIONAL,
      }).catch(catcher);

      res.status(200).json({
        status: true,
        count: count,
        countLocal: countLocal,
        countIntl: countIntl,
        countMale: countMale,
        countFemale: countFemale,
        countLocalFemale: countLocalFemale,
        countLocalMale: countLocalMale,
        countIntlFemale: countIntlFemale,
        countIntlMale: countIntlMale,
        countPreffessors: 0,
        countFullPreffessors: 0,
      });
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
