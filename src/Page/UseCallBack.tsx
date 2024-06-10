import { useCallback, useState } from "react";
import InputSearch from "../Componnets/InputSearch";

const allUsers = ["jhon", "alex", "george", "james", "simon"];

interface UseCallBackProps {}

export default function UseCallBack({}: UseCallBackProps) {
  const [users, setUsers] = useState(allUsers);
  const handleSearch = (text: string) => {
    console.log(text, "text");
    console.log(text.length, "text");
    // const filteredUsers = allUsers.filter((user) => user.includes(text));
    const filteredUsers = text
      ? allUsers.filter((user) =>
          user.toLowerCase().includes(text.toLowerCase())
        )
      : allUsers;

    console.log(filteredUsers);
    setUsers(filteredUsers);
  };

  const handleSuffle = useCallback(() => {
    console.log("handleSuffle");
    let x = [...allUsers, "test"];
    setUsers(x);
  }, []);

  return (
    <div className="main">
      <div>
        <button onClick={handleSuffle}>Shuffle</button>

        <InputSearch onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
