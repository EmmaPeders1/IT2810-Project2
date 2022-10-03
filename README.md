# Meshlab

## 😃 Members

Developed by:

- Emma Pedersen
- Sindre Eidskrem
- Martine Mansåker
- Hang Celin Le

## Tech stack

- React -Typescript

## Running the application

In the project directory, you can run:

npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload on edits.

npm test



npm run build


## Content and functionality

Applikasjonen skal ha flere sideelementer, men utforming og valg er opp til dere. Lag en løsning som dere mener er intuitiv og fornuftig.

Siden skal ha responsiv web-design (se under krav til teknologi). I praksis skal du demonstrere bruk av teknikker for responsiv web design.

En bruker skal kunne "lagre" noe lokalt, som skal hentes frem (eksemeplvis lagre spesifikke innstillinger eller valg som er gjort). I praksis skal du demonstrere bruk av HTML Web Storage (local storage, session storage, indexedDb). 

Presentasjon av gitlab-data skal være parameterisert. Det vil si at en bruker skal kunne gjøre noen valg som bidrar til å utforme/endre presentasjonen (filtrere på dato eller brukernavn eksempelvis).

The application consists of 

* Two input fields (one for the base-URL and one for the access token)
* Four buttons (so the user can "start" the data collection and can choose what kind of data they are interested in to)       

## Technical requirements

Løsningen implementeres med Typescript.

Our application is implementet with TypeScript and is based on React (and JSX). Functional components are primarly used, but the *Header.tsx*- file is a class based component. The component structure is 

Løsningen skal baseres på React (og JSX)Bruk primært funksjonelle komponenter, men du skal også lage en komponent som class. Implementere en hesiktsmessig komponentstruktur.

Løsningen viser god bruk av de ordinære mekanismene i React for å lagre og endre tilstand (state og props). 

I dette prosjektet skal vi ikke bruke løsninger som redux, mobx eller bibliotek for å håndtere tilstand da dette er tema i neste prosjekt

Løsningen viser bruk av Context API'et.

Du kan bruke UI-komponenter fra eksterne bibliotek, men skjal også implementere egne Reackt komponenter

Data fra GitLab skal lastes med AJAX (Asynchronous JavaScript). Bruk fetch() eller velg tredjeparts javascript-bibliotek for dette.

I  applikasjonen skal dere prøve ut og vise bruk av HTML Web Storage - både localstorage og sessionstorage (alternativt indexedDb). Det er fritt valg hvordan dere bruker Web Storage og til hva.

Løsaningen skal ha responsiv web design hvor layout, skalering og interaksjonsmuligheter tilpasses type enhet og størrelse på skjerm. Det skal se bra ut og interaksjonen skal fungere både på mobil, pad og pc med skjerm av forskjellig størrelse.

Følgende elementer skal være med i løsningen (eventuelt begrunnet i dokumentasjonen hvis det ikke er tatt med)

*    Viewport
*    Media-queries
*    Bilder som skalerer
*    Flytende/fleksibel layout

Prosjektet baseres på Node og bruk av Node Package Manager (NPM). Bruk versjon 16.X av node.js og version 8.X av npm.

Bruk create-react-app xxx --template typescript for å sette opp prosjektet

Bruk versjoin 18 av React


