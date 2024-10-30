import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface PropsItems {
  item: string[];
  onchangue: () => void; //
}

const AccionesSelet = ({ item, onchangue }: PropsItems) => {
  return (
    <Select>
      <SelectTrigger
        name="valor"
        onChange={onchangue}
        className="w-[100%]  p-4 m-2"
      >
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Names</SelectLabel>
          {item.map((item) => (
            <SelectItem value={item}>{item}</SelectItem>
          ))}

      </SelectContent>
    </Select>
  );
};

export default AccionesSelet;
