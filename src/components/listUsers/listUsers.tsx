import { useDispatch } from "react-redux";
import {
  UserState,
  changeArchive,
  changeRole,
} from "../store/usersSlice/userSlice";
import style from "./listUsers.module.scss";
import { AppDispatch } from "../store/store";

const ListUsers = ({ users }: { users: UserState[] }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handlerSelectRole = (user: UserState) => {
    console.log(user);

    dispatch(changeRole(user));
  };
  const handlerArchive = (user: UserState) => {
    dispatch(changeArchive(user));
  };

  return (
    <div className={style.users}>
      {users &&
        users.map((user: UserState) => (
          <ul key={user.name} className={style.list}>
            <li className={style.item} id={style.name}>
              {user.name}
            </li>
            <li className={style.item} id="name">
              <select
                name="Должность"
                onChange={(e) =>
                  handlerSelectRole({ ...user, role: e.currentTarget.value })
                }
                defaultValue={user.role}
              >
                <option value="cook">Повар</option>
                <option value="waiter">Официант</option>
                <option value="driver">Водитель</option>
              </select>
            </li>
            <li className={style.item}> {user.phone}</li>
            <li className={style.item}>
              {
                <input
                  onChange={() => handlerArchive(user)}
                  type="checkbox"
                  checked={!!user.isArchive}
                />
              }
            </li>
          </ul>
        ))}
    </div>
  );
};

export default ListUsers;
