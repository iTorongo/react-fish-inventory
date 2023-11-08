# React Vite Starter

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This template is bootstraped with all the required tools needed to quick start a TypeScript based React application. Tailwind CSS has been used for styling purpose. Also this template is configured to write styling with sass.

## Getting started

Follow these steps to get the React application up and running on your local machine.

### Prerequisites

Ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

**Clone the repository, navigate to the project folder and install the dependencies**

```bash
git clone https://github.com/iTorongo/react-vite-starter.git
cd react-vite-starter
npm install
```

## Project structure

This project structure has been followed with the aim of creating a scalable and maintainable codebase follwoing the SOLID principle

```bash
src/
 api/
 components
   atoms/
      Button/
      Typography/
      ...
   molecules/
      Header
      ...
   layout/
      DefaultLayout/
      DashBoardLayout/
   ...
 constants/
   env.ts
   ...
 features/
   home/
     screens/
         HomeScreen/
     ...
   overview/
      components/
         EnvironmentCard/
         ...
      screens/
         OverviewScreen/
   ...
 helpers/
   utils.helpers.ts
   ...
 hooks/
 i18n/
   en/
 redux/
   sore.ts
   root-reducer.ts
 routes/
 types/
   table.tupes.ts/
   ...
 styles/
    _variables.scss
   ...
```

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:5172/`. The application will automatically update on browser with the efficient HMR of Vite if you change any of the source files.

## Build

Run `npm run build` to build the project.

## Testing

Run `npm run test` to run the unit test with Jest.
