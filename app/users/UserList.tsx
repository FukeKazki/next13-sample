import { User } from "./page"

type Props = {
  users: User[]
}

export const UserList = ({ users }: Props) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <p>{user.login}</p>
        </li>
      ))}
    </ul>
  )
}