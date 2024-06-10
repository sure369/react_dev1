import { memo } from "react";

const Todos = ({ todos }: any) => {
  console.log("child rendered");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo: any, _: any) => {
        return <p key={_}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);
