import { UserState } from "../store/usersSlice/userSlice";
import style from "./listUsers.module.scss";
import { Link } from "react-router-dom";
import { roles } from "../../assets/role";
const ListUsers = ({ users }: { users: UserState[] }) => {
  return (
    <div className={style.users}>
      {users &&
        users.map((user: UserState) => (
          <Link key={user.name} to={`/${user.id}`}>
            <ul className={style.list}>
              <li className={style.item} id={style.name}>
                {user.name}
              </li>
              <li className={style.item} id="name">
                {roles[user.role as keyof typeof roles]}
              </li>
              <li className={style.item}> {user.phone}</li>
              <li className={style.item}>
                {<input type="checkbox" readOnly checked={!!user.isArchive} />}
              </li>
            </ul>
          </Link>
        ))}
    </div>
  );
};

export default ListUsers;
