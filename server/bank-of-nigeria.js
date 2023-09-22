import { chromium } from 'playwright'

const bankOfNigeria = 'https://www.cbn.gov.ng/documents/circulars.asp?beginrec=1&endrec=20&keyword=&from=&tod=';

// TODO: get previous date from DB
//test date before the more recent circular
const previousDate = new Date(`2022-09-13`);

async function scrapeBankOfNigeria() {
    const browser = await chromium.launch({headless: true});
    
    const page = await browser.newPage();
    await page.goto(bankOfNigeria);

    const topCircular = page.locator('.dbasetable')
    const topRowLocator = topCircular.locator('tr:nth-child(2)');
    const publishedDate = await topRowLocator.locator('#publishedDt').textContent();
    const dateString = publishedDate?.trim()
    const partsOfDate = dateString?.split(' ')[1].split('/')

    const year = parseInt(partsOfDate[2], 10);
    const month = parseInt(partsOfDate[0], 10) - 1; //minus one b/c JS months are 0 indexed
    const day = parseInt(partsOfDate[1], 10);

    const date = new Date(year, month, day);
      
    if(date.getTime() > previousDate.getTime()) {
      console.log('new circular found!');
    }
    await browser.close();
}

await scrapeBankOfNigeria();

