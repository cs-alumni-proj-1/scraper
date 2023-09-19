import { useState } from "react";
import Banklink from "./components/BankLink";
import SideNav from "./components/SideNav";
import { BankData } from "./types/BankTypes";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// const data: BankData[] = new Array(142).fill({ name: "test", link: "test" });
const data: BankData[] = [
  {
    name: "Central Bank of Kenya",
    link: "https://www.centralbank.go.ke/policy-procedures/legislation-and-guidelines/circulars/",
  },
  {
    name: "Central Bank of Nigeria",
    link: "https://www.cbn.gov.ng/documents/circulars.asp?beginrec=1&endrec=20&keyword=&from=&tod=",
  },
  {
    name: "Bank of Zambia",
    link: "https://www.boz.zm/circulars.htm",
  },
  {
    name: "Banco de Mozambique",
    link: "https://www.bancomoc.mz/en/media/communications/?query=&page=1",
  },
  {
    name: "Reserve Bank of Malawi",
    link: "https://www.rbm.mw/MediaCenter/PressReleases/",
  },
  {
    name: "National Bank of Rwanda",
    link: "https://www.bnr.rw/news-publications/news/news-press-release/",
  },
  {
    name: "Bank of Tanzania",
    link: "https://www.bot.go.tz/Publications/Filter/39",
  },
];

const itemsPerPage = 7;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen">
      <div>
        <SideNav />
      </div>
      <div className="flex-1 my-2 mx-8">
        <div className="flex justify-end">
          <input
            className="rounded border-2 font-montaga p-2 px-6 self-end m-4 border-linkBorder w-1/3"
            placeholder="Search"
          />
        </div>
        <h1 className="text-5xl font-bold font-montserrat mb-4">
          Current Notifications
        </h1>
        <div className="">
          {currentData.map((el, index) => (
            <div className="flex" key={index}>
              <Banklink data={el} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="flex space-x-2 fixed bottom-10 ">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`rounded-full w-8 h-8 border-linkBorder border-2 ${
                  currentPage === i + 1 ? "bg-gray-300" : ""
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
