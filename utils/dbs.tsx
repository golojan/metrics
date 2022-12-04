import { useDispatch, useSelector } from "react-redux";
import { DepartmentsInfo } from "../interfaces";
import { Dispatch, RootState } from "../store";

export const getDepartment = (arrData: Array<DepartmentsInfo>, id: string) => {
  const Wrapper = (props: any) => {
    const dispatch = useDispatch<Dispatch>();
    const { departments } = useSelector(
      (state: RootState) => state.departments
    );
    return arrData.find((e) => e._id === id);
  };
  return Wrapper;
};
