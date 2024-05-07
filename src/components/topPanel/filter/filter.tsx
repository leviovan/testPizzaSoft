import { useDispatch } from "react-redux";
import { filterBy } from "../../store/usersSlice/userSlice";
import { AppDispatch } from "../../store/store";
import { useRef, useState } from "react";

import style from "./filter.module.scss";
function Filter() {
  const dispatch = useDispatch<AppDispatch>();
  const [status, setStatus] = useState(false);
  const ref = useRef<HTMLSelectElement>(null);
  return (
    <div className={style.filter}>
      <h3>Фильтры: </h3>
      <label htmlFor="role">
        Должность
        <select
          ref={ref}
          name="Должность"
          onChange={(e) => {
            dispatch(
              filterBy({
                role: e.currentTarget.value,
                status: !status,
              })
            );
          }}
        >
          <option value="">--Выберите должность--</option>
          <option value="cook">Повар</option>
          <option value="waiter">Официант</option>
          <option value="driver">Водитель</option>
        </select>
      </label>
      <label htmlFor="status">
        Статус
        <input
          id="status"
          type="checkbox"
          checked={status}
          onClick={() => {
            setStatus(!status);
            dispatch(
              filterBy({
                role: ref.current?.value,
                status: status,
              })
            );
          }}
        />
      </label>
    </div>
  );
}

export default Filter;
