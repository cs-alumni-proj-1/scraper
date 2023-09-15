import "./App.css";

function App() {
  const data = [
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
    <div>
      <h1 className="text-5xl font-bold font-montserrat">
        Current Notifications
      </h1>
      <div>
        {data.map((el, index) => (
          <div key={index}>
            <a className="text-3xl font-montaga" href={el.link}>
              {el.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
