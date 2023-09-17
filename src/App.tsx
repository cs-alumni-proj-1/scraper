import Banklink from "./components/BankLink";
import SideNav from "./components/SideNav";
import { BankData } from "../types";

function App() {
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

  return (
    <div className="flex h-screen">
      <div>
        <SideNav />
      </div>
      <div className="flex-1 m-20">
        <h1 className="text-5xl font-bold font-montserrat mb-4">
          Current Notifications
        </h1>
        <div className="">
          {data.map((el, index) => (
            <div className="flex" key={index}>
              <Banklink data={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
