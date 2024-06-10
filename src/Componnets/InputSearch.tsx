import { memo } from "react";

//memo -- suing "memo" will cause React to skip rendering a componnet if its props have not changed ,
//ex: in the component we have button and another component wrapped ,
// we pass prop , if the component button clicked and updates in parent component
//, the wrapped component also rendered to avoid this we use "memo"

//https://www.w3schools.com/react/react_memo.asp

//memo helps to avoid the unnecessary "re-render" of a component when its props do not change

//compoennt Memo.tsx

interface SearchProps {
  onChange: (text: string) => void;
}
//onchange function from parent ,which has text parameters

function InputSearch({ onChange }: SearchProps) {
  console.log("child rendered");
  return (
    <input
      type="text"
      placeholder="Search Users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default memo(InputSearch);
