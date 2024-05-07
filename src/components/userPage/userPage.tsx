import style from "./userpAge.module.scss";
import InputMask from "react-input-mask";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Link, useLocation } from "react-router-dom";
import { changeUser } from "../store/usersSlice/userSlice";
import { useState } from "react";

type Inputs = {
  id: number;
  name: string;
  phone: string;
  birthday: string;
  role: string;
  isArchive: false;
};

const UserPage = () => {
  const { pathname } = useLocation();
  const currentId = pathname.split("/")[1];
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector((s: RootState) =>
    s.users.usersFilter.filter(
      (user) => user.id === (currentId as unknown as number)
    )
  );
  const [status, setStatus] = useState(users[0].isArchive);

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(changeUser(data));
    alert("Вы обновили данные пользователя ");
  };
  return (
    <div className={style.page}>
      <div className="container">
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            Номер:
            <input
              readOnly
              id={"id"}
              className={style.input}
              defaultValue={users[0].id}
              {...register("id")}
            />
          </label>
          <label htmlFor="name">
            Имя
            <input
              id={"name"}
              className={style.input}
              defaultValue={users[0].name}
              {...register("name")}
            />
          </label>
          <label htmlFor="phone">
            Номер
            <InputMask
              mask={"+9 (999) 999-99-99"}
              className={style.input}
              defaultValue={users[0].phone}
              {...register("phone")}
            />
          </label>
          <label htmlFor="birthday">
            Дата рождения
            <InputMask
              id={"birthday"}
              mask={"99.99.9999"}
              className={style.input}
              defaultValue={users[0].birthday}
              {...register("birthday")}
            />
          </label>
          <label htmlFor="role">
            Должность
            <select
              {...register("role")}
              id={"role"}
              defaultValue={users[0].role}
            >
              <option value="cook">Повар</option>
              <option value="waiter">Официант</option>
              <option value="driver">Водитель</option>
            </select>
          </label>
          <label htmlFor="isArchive">
            В архиве
            <input
              onClick={() => setStatus(!status)}
              checked={status}
              type="checkbox"
              {...register("isArchive")}
              id={"isArchive"}
            />
          </label>
          <input type="submit" value={"Сохранить"} />
        </form>
        <Link to={"/"}>Закрыть </Link>
      </div>
    </div>
  );
};

export default UserPage;
