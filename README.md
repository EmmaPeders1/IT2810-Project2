# Meshlab

## 😃 Members

Developed by:

- Emma Pedersen
- Sindre Eidskrem
- Martine Mansåker
- Hang Celin Le

## :computer: Tech stack

- React -Typescript

## :arrow_forward: Running the application

In the project directory, you can run the project by typing *npm start* in the terminal.
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload on edits.

Run *npm test* to test the application.

Run *npm run build* to build the application.


## :page_with_curl: Content and functionality

### Content

When starting the application, the user will be met by a header and a search field. The user can input their desired URL-link and accesstoken. The user should then press on one of the three buttons. These reads *USERS*, *COMMITS* and *ISSUES*. If at least one of the inputs are not accepted, an error message will appear when trying to access the data by pressing one of the buttons. Upon clicking on the different buttons, a data grid will be visible for the user. This data grid will have different headers based on what button is pressed. The user can filter or sort these as they like. If the user chooses *COMMITS*, then a doughnut chart will appear displaying the contribution of each user. This chart has only five colors defined. This is a conscious choice as the groups within the class have a maximum of four members. There is still possible to display more contributors, but their contribution will be displayed in black.


###  Functionality

To adhere to responsive web design, the elements are are responsive to changes and are functional for different screen sizes. This is primarly implemented by the use of CSS flexboxes. 

LocalStorage and SessionStorage is used for storing the theme and the user speciefied url and access token. Our application uses custom hooks that lets use use these almost as normal state. The theme uses LocalStorage, so this is persistent even when stopping and restarting the server. The URL and access token in the input is saved with LocalStorage, so this is persisten when reloading the page.

The gitlab-data is parametric as the user has the ability to change what the data grids are displaying. All the columns has a filter property which can be accessed by pressing the three vertical dots which appear within the header cell upon hovering. The same process can be used to obtain the ability to decide how the data is sorted and what data to display. The last feature can be problematic, as the user can remove all the columns, but this can be undone by changing to a different category and then choosing the old category again. This means that the user's choices concerning the data grid does not last, even in session. 

## :wrench: Technical requirements

The project is based på Node and use of the Node Package Manager (NPM). Version 16.X of node.js and version 8.X of npm.

We used the command create-react-app xxx --template typescript to set up the project and are using version 18.

Our application is therefore implemented with TypeScript and is based on React (and JSX). Functional components are primarly used, but the *Header.tsx* and *Footer.tsx*- files are class based components. The component structure is appropriate to the project, as the components- and css-files are placed in folders by the same names. 

*State* and *props* are used to save and change the appearance of the application. 

The Context API is used to pass the user-unputted project URL and access token. These could just as easily be passed as props but use of Centext was a requirement for the project.

The data grids which are returned in *UserFetcher.tsx*, *CommitFetcher.tsx* and *IssueFetcher.tsx* are imported from [mui.com](https://mui.com/) and modified for our project. *Input.tsx*, *Button.tsx*, *Footer.tsx*, *Header.tsx* and the wrapper classes made up by these are self made.  

The data from Gitlab is fetched using *fetch()*. This complies with the requirements for using AJAX.

HTML Web Storage is used to save the state of theme and input in the fields. In order to save the theme, and have the application remember chosen theme the next time an user starts the server,  we have utilized local storage by creating a custom react hook *useLocalStorage(key, defaultValue)* to store the state. 
To make use of session storage, we have made it possible to store the input from the user for each session. Every time the user types in the input field for URL or accesstoken and refreshes the window/ opens a new window, the input is saved.

Our solution has a responsive web design. Layout, scaling and interaction posibilities are adaptable based on what type of device and screen size. By using CSS flexboxes, all the elements and their contents are visible and available for the user to see and interact with. 

Media-queries and picture scaling are used in the Header, in order to scale the header image properly. Media-query is also used for the chart and the data grid under commits. We chose not to use viewport because we handled scalability and responsiveness for different devices using CSS flexbox and media-queries.

# :gear: Testing

Testing is mainly done by explorative testing done by members of the group and fellow students. This is done by giving the students prompts or letting them explore by them selves. We then took notes of where the students had problems understanding or when an unexpected bug appeared. 
Our project has also five simple snapshot tests in *App.test.tsx* and three components tests (in *Footer.test.txt*, *Header.test.txt* and *Input.test.txt*). In creating these, we have attained understanding and experience in testing.  

In testing the user interface and responsive design, we have used the device emulation in the web browser to simulate the design of the appilcation on a phone screen (vertically and horizontally) and an ordinary PC (big screen) as well as an IPad (medium screen).


# :sweat: In retrospective

In retrospective, we have gained experience and have some thoughts on what we could have done better. 

For example, we realized that we should have structured our fetching of data and components in another way. Right now we have 3 different components responsible for fetching their own data (User-, Commit- and IssueFetcher). This is not a good solution. For example the code in these components responsible for fetching is very similar. If we had more time, we would have written a custom hook for fecthing.

Also, we would let another component do ALL the fetching, and the have these components only display the data based on user selection. This way it would also be easier to validate the url-link and access token provided by the user. Then, we would only display the buttons if an existing gitlab-project with a valid token was provided, otherwise we would alert the user that their input is invalid. Right now, a new call to the API is done everytime a user selects *USERS*, *COMMITS* or *ISSUES*. This is quite inneficient and would also be avoided with this other method.

We should also improve our use of the git-convensions. Mainly in connecting the commits and issues, but also in use of labels and milestones. 
