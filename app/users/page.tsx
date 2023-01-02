import { use } from "react";
import { UserList } from "./UserList";

export type User = {
  id: number
  login: string
}

async function getUsers() {
  const res = await fetch("https://api.github.com/users");
  return res.json();
}

export default function Page() {
  const users = use<User[]>(getUsers())
  return (
    <>
      <UserList users={users} />
    </>
  );
}

