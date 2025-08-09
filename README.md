# Sports leagues app

## How to run

- clone this repo
- execute 'npm intstall' in your terminal
- execute 'vite preview' command in your terminal

## Architechtual decisions

- I chose RTK Query as the data-fetching library because it simplifies managing loading and error states. It also provides built-in request caching, which helps meet one of the requirements.
- Material UI is used as the main component library.
- Vite is used as the build tool.
- The project follows Feature-Sliced Design, with UI components organized in the /ui folder.

## What to improve

I implemented the filtering functionality entirely on the client side, which is rarely ideal. I noticed there’s an endpoint '/search_all_leagues.php' that supports searching leagues via query params. It differs from the all_leagues endpoint, but with more time, I would use it to filter leagues and implement a debounced search to query by name and sport type.

## AI usage

While I have expirience using all of the mentioned libraries, I utilized AI to quickly scaffold some boilerplate code for RTK query, initialize react-router-dom and MUI theme.
I also used it to refactor a bit my useFilteredLeagues hook.
