import { useDispatch } from "react-redux";
import { SortedBy } from "../../assets/role";
import style from "./TopPanel.module.scss";
import { AppDispatch } from "../store/store";
import { resetFilter, sortUserBy } from "../store/usersSlice/userSlice";
import Sorting from "./sorting/sorting";
import Filter from "./filter/filter";

interface ITopPanel {
  field: SortedBy;
}
const TopPanel = ({ field }: ITopPanel) => {
  const dispatch = useDispatch<AppDispatch>();

  const sortHandler = (field: string) => {
    dispatch(sortUserBy(field));
  };
  const resetHandler = () => {
    dispatch(resetFilter());
  };
  return (
    <div className={style.panel}>
      <Sorting sortBy={sortHandler} field={field} />
      <Filter />

      <button onClick={() => resetHandler()}>Сбросить фильтры </button>
    </div>
  );
};

export default TopPanel;
