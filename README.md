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

npm test

npm run build


## :page_with_curl: Content and functionality

### Content
When starting the application, the user will be met by a header and a search field. The user can input their desired URL-link and accesstoken. If at least one of the inputs are not accepted, an error message will appear. Three buttons will appear if both inputs are accepted. These reads *USERS*, *COMMITS* and *ISSUES*. Upon clicking on the different buttons, a data grid will be visible for the user. This data grid will have different headers based on what button is pressed. The user can filter or sort these as they like. 


###  Functionality
To adhere to responsive web design, the elements are are responsive to changes and are functional for different screen sizes. This is primarly implemented by the use of flex boxes. 

The saving on this website is automatic and the user will be met by their old choice of theme and API upon restart. The saving is handled by **[INSERT REASON]**

The gitlab-data is parametric as the user has the ability to change what the data grids are displaying. All the colomns has a filter ability which can be accessed by pressing the three vertical dots which appear within the header cell upon hovering. The same process can be used to obtain the ability to decide how the data is sorted and what data to display. The last feature can be problematic, as the user can remove all the colomns, but this can be undone by changing to a different category and then choosing the old category again. This means that the user's choices concerning the data grid does not last, even in session. 

## :wrench: Technical requirements

Our application is implementet with TypeScript and is based on React (and JSX). Functional components are primarly used, but the *Header.tsx* and *Footer.tsx*- files are class based components. The component structure is appropriate to the project, as the components- and css-files are placed in folders by the same names. 

*State* and *props* are used to save and change the appearance of the application. 

The Context API is used to **[NOE MED URL]**.

The data grids which are returned in *UserFetcher.tsx*, *CommitFetcher.tsx* and *IssueFetcher.tsx* are imported from [mui.com](https://mui.com/) and modified for our project. *Input.tsx*, *Button.tsx*, *Footer.tsx*, *Header.tsx* and the wrapper classes made up by these are self made.  

**Data fra GitLab skal lastes med AJAX (Asynchronous JavaScript). Bruk fetch() eller velg tredjeparts javascript-bibliotek for dette.**

**I  applikasjonen skal dere prøve ut og vise bruk av HTML Web Storage - både localstorage og sessionstorage (alternativt indexedDb). Det er fritt valg hvordan dere bruker Web Storage og til hva.**

HTML Web Storage is used to save the state of theme and input in the fields. 

Løsaningen skal ha responsiv web design hvor layout, skalering og interaksjonsmuligheter tilpasses type enhet og størrelse på skjerm. Det skal se bra ut og interaksjonen skal fungere både på mobil, pad og pc med skjerm av forskjellig størrelse.

Our solution has a responsive web design. Layout, scaling and interaction posibilities are adaptable based on what type of device and screen size. In testing this, we have used the device emulation in the web browser. By using flex boxes, all the elements and their contents are visible and available for the user to see and interact with.  

**Følgende elementer skal være med i løsningen (eventuelt begrunnet i dokumentasjonen hvis det ikke er tatt med)**
*    Viewport
*    Media-queries
*    Bilder som skalerer
*    Flytende/fleksibel layout

Our solution includes Viewport **[REALLY?]** by ...?
Media-queries and picture scaling are used in the Header. 

Prosjektet baseres på Node og bruk av Node Package Manager (NPM). Bruk versjon 16.X av node.js og version 8.X av npm.

Bruk create-react-app xxx --template typescript for å sette opp prosjektet

Bruk versjoin 18 av React

# :gear: Testing

Prosjektet skal vise oppsett av og eksempel på testing med Jest - minimum er å ha en snapshottest og noen enkle tester på komponentenes oppførsel. 

Målet med dette kravet er at dere kommer i gang med testing, får erfaring i oppsett og en forståelse av hva vi typisk tester i React-applikasjoner. Vi legger lite vekt på omfanget av testingen, men dere skal vise at dere har forstått prinsippet i testingen.

Testing av brukergrensesnitt og responsiv design: Gruppa skal beskrive/dokumentere testing på minimum 3 forskjellige enheter hvor det må inngå en mobil (liten skjerm/horisontal + vertikal orientering og en ordinær pc (stor skjerm). 

