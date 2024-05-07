import style from "./home.module.scss";

import ListUsers from "../listUsers/listUsers";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchUsers } from "../store/usersSlice/userSlice";
import { useEffect } from "react";
import TopPanel from "../topPanel/topPanel";
import { role } from "../../assets/role";

const Home = () => {
  const filterUsers = useSelector((s: RootState) => s.users.usersFilter);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className={style.home}>
      <div className="container">
        <div className={style.header}>
          <ul className={style.list}>
            <li className={style.item} id={style.name}>
              Имя
            </li>
            <li className={style.item} id="name">
              Должность
            </li>
            <li className={style.item}>Номер</li>
            <li className={style.item}>В архиве</li>
          </ul>
        </div>
        <TopPanel field={role} />
        <ListUsers users={filterUsers} />
      </div>
    </div>
  );
};

export default Home;
