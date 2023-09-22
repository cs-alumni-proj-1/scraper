import { BankLinkProps } from "../types/BankTypes";
import React from "react";
import axios from 'axios';

export default function Banklink(props: BankLinkProps) {
  const { data } = props;

  const retrieveCirculars = async (link: String) => {
    const response = await axios({
      method: 'post',
      url: `http://localhost:3000/health/circulars`,
      data: {
        link: link
      }
    })

    console.log(response.data);

    return;
  }

  return (
    <div>
      <a
        className="text-3xl font-montaga border-2 rounded bg-linkFill border-linkBorder m-2 p-2 w-full"
        href={data.link}
      >
        {data.name}
      </a>
      <button onClick={() => retrieveCirculars(data.link)}>Retrieve circular</button>
    </div>
  );
}
