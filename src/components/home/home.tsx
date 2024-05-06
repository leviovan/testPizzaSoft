import style from "./home.module.scss";

import { UserState, useGetUserQuery } from "../../services/userApi";
import ListUsers from "../listUsers/listUsers";

const Home = () => {
  const { data } = useGetUserQuery("http://localhost:3000");

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

        <ListUsers users={data as UserState[]} />
      </div>
    </div>
  );
};

export default Home;
