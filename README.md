# ReadMe

The purpose of this is to create a tool where users can sign up via email and subscribe to be notified of new bank circulars. Any time a new circular is found on one of the following websites, they will be notified via email that there is a new circular, with a link to the bank and the page where the circular can be found.

The circulars being scraped for are public information, so there should be no need for user authentication. This service is to provide users with immediate notifications when a new circular is released.

Ultimately, there will likely be around 150 banks that will be added to this project, so any ways to automate the process of adding new banks will be helpful.

Thank you for any contributions you can make to this project! I will review all PRs, and will be happy to pair program with anyone who wants to contribute.

If you make any additions that change how the project needs to be run, please update this README with the new instructions.

## Running the project
First, be sure to ```npm install``

To run the dev server, use ```npm run dev```

## What does the database look like?
A database has not been decided on yet, and is up for discussion.

Likely, this will be a relational database, and at the moment we know we will need the following information within our tables:

### Banks
| id | name | region | url |

### Circulars
| id | bank_id | title | url | date_published |

### Users
| id | email |

### User Banks
| id | user_id | bank_id |

There may be a more optimal way to handle this, but it is important that users can sign up for specific banks, or for all banks in a specific region.


## Tasks
- [x] Set up the project so it is an empty React/Node application
- [ ] Create GH organization for others to collaborate
- [ ] Create a database with the following tables and columns:
    - [ ] Banks
        - [ ] id
        - [ ] name
        - [ ] region
        - [ ] url
    - [ ] Circulars
        - [ ] id
        - [ ] bank_id
        - [ ] title
        - [ ] url
        - [ ] date_published
    - [ ] Users
        - [ ] id
        - [ ] email
    - [ ] User Banks
        - [ ] id
        - [ ] user_id
        - [ ] bank_id
- [ ] Create a scraper to scrape the following websites:
    - [ ] [Central Bank of Kenya]("https://www.centralbank.go.ke/policy-procedures/legislation-and-guidelines/circulars/")
    - [ ] [Central Bank of Nigeria](https://www.cbn.gov.ng/documents/circulars.asp?beginrec=1&endrec=20&keyword=&from=&tod=)
    - [ ] [Bank of Zambia](https://www.boz.zm/circulars.htm)
    - [ ] [Reserve Bank of Malawi](https://www.rbm.mw/MediaCenter/PressReleases/)
    - [ ] [National Bank of Rwanda](https://www.bnr.rw/news-publications/news/news-press-release/)
    - [ ] [Bank of Tanzania](https://www.bot.go.tz/Publications/Filter/39)
- [ ] Create a page where users can enter their email and select which banks they want to receive notifications for
- [ ] Create a way for users to unsubscribe from notifications
- [ ] Create a way for users to update their email address
- [ ] Create a way for users to only sign up for specific newsletters they want
- [ ] Create a method for users to sign up for newsletters by region
- [ ] Create an email template to be sent out to clients who sign up for notifications
- [ ] Create a method that emails users when a new circular is found

**Note: Instead of having users go through a sign up flow, and to avoid authentication/passwords for now, we can simply have a page where the user enters their email address, selects the banks/regions they want to receive notifications for, and press a button to confirm.

They'll then get sent an email to confirm their email address is working and valid, and can click to confirm.

If they need to change their preferences, there will be an option to enter their email on a page, which will query the database for the list of banks they get notifications for - and they can then update their preferences.

There will also be an option to enter their email and delete all their data from the database.

This should avoid the need for authentication, and will be a simple way to get users signed up for notifications without saving any personal data.

This can be revisited if it does not meet the clients needs or if the client's users request a more robust sign up process.

## Contributing
If you would like to contribute, please clone the repo, create a new branch, and submit a PR.

If you are unfamiliar with the process of contributing to a project like this and have questions, please feel free to reach out to me. The steps below are a general overview of the process, in case you need a refresher.

Basic steps:

1. Clone the repo
    ```git clone```
2. Create a new branch
    ```git checkout -b <branch-name>```
    - The branch name should be descriptive of the feature you are working on
3. Make your changes
4. Add your changes locally
    ```git add <file-name>```
    If you want to add all changes, you can use ```git add .```, but please be sure to review your changes before committing them. You can do this with a ```git status``` to ensure no unwanted changes are being added.
5. Commit your changes
    ```git commit -m "your commit message"```
6. Push your changes to the remote repo
    ```git push origin <branch-name>```
7. Create a PR
    - Go to the repo on GitHub
    - Click on the "Pull Requests" tab
    - Click the green "New Pull Request" button
    - Select your branch from the dropdown (target branch should be "main")
    - Add a title and description
        If this is a frontend task, please add screenshots of the changes you made
    - Click "Create Pull Request"
8. Wait for your PR to be reviewed
9. Make any changes requested
10. Once your PR is approved, it will be merged into the main branch!


## Figma and Database Schema
TODO