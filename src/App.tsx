import "./App.css";

function App() {
  return (
    <>
        <h3>Websites that need to be scraped from:</h3>
        <br />
        <a href="https://www.centralbank.go.ke/policy-procedures/legislation-and-guidelines/circulars/">
          Central Bank of Kenya
        </a>
        <br />
        <a href="https://www.cbn.gov.ng/documents/circulars.asp?beginrec=1&endrec=20&keyword=&from=&tod=">
          Central Bank of Nigeria
        </a>
        <br />
        <a href="https://www.boz.zm/circulars.htm">Bank of Zambia</a>
        <br />
        <a href="https://www.bancomoc.mz/en/media/communications/?query=&page=1">
          Banco de Mozambique
        </a>
        <br />
        <a href="https://www.rbm.mw/MediaCenter/PressReleases/">
          Reserve Bank of Malawi
        </a>
        <br />
        <a href="https://www.bnr.rw/news-publications/news/news-press-release/">
          National Bank of Rwanda
        </a>
        <br />
        <a href="https://www.bot.go.tz/Publications/Filter/39">
          Bank of Tanzania
        </a>
        <br />
        <a href="">Bank 5</a>
        <br />
        <a href="">Bank 5</a>
        <br />
        <a href="">Bank 5</a>
        <br />
        <a href="">Bank 5</a>

        <br />
        <h3>What does this app do?</h3>
        <p>
          This app scrapes the web once a day to see if a new circular has been
          published.
        </p>
        <p>
          If the new circular has been published, it notifies the appropriate
          people via email and sends them a link to the published circular.
        </p>

        <br />
    </>
  );
}

export default App;
