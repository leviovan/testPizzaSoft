import { SortedBy } from "../../../assets/role";
import style from "./sorting.module.scss";
interface OSorting {
  field: SortedBy;
  sortBy: (arg0: string) => void;
}
const Sorting = ({ sortBy, field }: OSorting) => {
  return (
    <label className={style.sort}>
      Сотрировка
      <select onChange={(e) => sortBy(e.currentTarget.value)}>
        {Object.keys(field).map((item) => {
          return (
            <option key={item} value={item}>
              {field[item as keyof typeof field]}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Sorting;
