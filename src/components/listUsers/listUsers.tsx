import style from "./listUsers.module.scss";
import { UserState } from "../../services/userApi";

const ListUsers = ({ users }: { users: UserState[] }) => {
  console.log(users);

  return (
    <div className={style.users}>
      {users &&
        users.map((user: UserState) => (
          <ul key={user.name} className={style.list}>
            <li className={style.item} id={style.name}>
              {user.name}
            </li>
            <li className={style.item} id="name">
              {user.role}
            </li>
            <li className={style.item}> {user.phone}</li>
            <li className={style.item}>
              {<input type="checkbox" checked={!!user.isArchive} />}
            </li>
          </ul>
        ))}
    </div>
  );
};

export default ListUsers;
