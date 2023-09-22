// THIS IS AN UNTESTED SCRAPER, IT IS ONLY FOR EXAMPLE PURPOSES
// Please do not copy this code without first testing to see if it works
// none of the below have been installed yet, as we are considering other alternatives

const cron = require("node-cron");
const axios = require("axios");
const cheerio = require("cheerio");

// Define the URL to scrape
// TODO: see if it is possible to scrape all websites with one function
const url =
  "https://www.centralbank.go.ke/policy-procedures/legislation-and-guidelines/circulars";

// Define a function to scrape the website and check for new circulars
const scrapeWebsite = async () => {
  try {
    // Fetch the HTML content of the website
    const response = await axios.get(url);
    const html = response.data;

    // Load the HTML content into Cheerio
    const $ = cheerio.load(html);

    // Find the latest circular on the page
    const latestCircular = $(
      "div.view-content div.views-row:first-child h3 a"
    ).text();

    // TODO: pull the previous circular from the database
    // Check if the latest circular is different from the previous one
    if (latestCircular !== previousCircular) {
      console.log("New circular found:", latestCircular);
      // TODO: Send an email or notification to alert the user
      // TODO: Save the latest circular to a database
      previousCircular = latestCircular;
    } else {
      console.log("No new circulars found");
    }
  } catch (error) {
    console.error(error);
  }
};

// Define a variable to store the previous circular
let previousCircular = "";

// Schedule the scraper to run twice a day (at 9am and 9pm)
cron.schedule("0 9,21 * * *", () => {
  console.log("Scraping website...");
  scrapeWebsite();
});
