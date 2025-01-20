# Next.js 15 App Router: Inconsistent getServerSideProps behavior in nested layouts

This repository demonstrates an unexpected behavior in Next.js 15's App Router when using a custom `getServerSideProps` function within a nested layout component. The `getServerSideProps` function executes correctly on the initial page load, but subsequent navigation to other pages within the application fails to properly update the state.

## Bug Description

The issue is observed when using a nested layout structure with `getServerSideProps` implemented in one of the nested layout components.  While the data is fetched and rendered correctly initially, subsequent navigations do not trigger a re-execution of `getServerSideProps`, leading to stale data and inconsistent behavior.

## Reproduction

1. Clone the repository
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Observe the behavior upon initial navigation and subsequent route changes.

## Expected Behavior

`getServerSideProps` should re-execute whenever the route changes, providing up-to-date data on every page load.

## Actual Behavior

`getServerSideProps` only executes once during the initial page load. Subsequent route changes do not re-trigger the function, resulting in stale data being displayed.

## Potential Solutions

The solution involves refactoring the code to leverage features of the app directory, perhaps by employing a different data fetching strategy.