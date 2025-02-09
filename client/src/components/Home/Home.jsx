import {
  useGetUsersQuery,
  // useDeleteUserMutation,
  // useUpdateUserMutation,
} from "./HomeSlice";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: users } = useGetUsersQuery();
  const [userArr, setUserArr] = useState();

  useEffect(() => {
    if (users?.users) {
      setUserArr(users?.users);
    }
  }, [users]);
  const token = window.sessionStorage.getItem("token");
  console.log("Here is my token", token)

  return (
    <div>
      This is my Home
      <ul className="books">
        {userArr?.map((p) => (
          <li key={p.id}>
            {p.firstName} {p.lastName} - {p.email}
            {/* <button onClick={() => seeBookDetails(p.id)}>Update</button>
            <button onClick={() => seeBookDetails(p.id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
