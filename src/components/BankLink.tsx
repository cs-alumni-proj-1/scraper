import React from "react";
import { BankLinkProps } from "../types/BankTypes";

export default function Banklink(props: BankLinkProps) {
  const { data } = props;
  return (
    <a
      className="text-3xl font-montaga border-2 rounded bg-linkFill border-linkBorder m-2 p-2 w-full"
      href={data.link}
    >
      {data.name}
    </a>
  );
}
