import { BankData } from "../../types";

export default function Banklink(props: { data: BankData }) {
  const { data } = props;
  return (
    <a
      className="text-3xl font-montaga border-2 rounded bg-linkFill border-linkBorder m-2 p-2 w-screen"
      href={data.link}
    >
      {data.name}
    </a>
  );
}
