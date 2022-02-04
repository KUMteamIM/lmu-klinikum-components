# lmu-klinikum-components

React component library for shared html elements in LMU Klinikum CI.

## Usage

Add to your package.json like so and include bootstrap:

```
    npm install @lmu-med/ci-components bootstrap
```

### JSX components available for immediate use

```html
import { CommonNavbar } from "@lmu-med/ci-components";

<CommonNavbar />
<CommonNavbarGrey />
<CommonFooter />
<CommonCookieNotice />
```

For details on these see [the wiki](https://github.com/KUMteamIM/lmu-klinikum-components/wiki/Available-Components).

Some example implementation and available properties for the components can also be found inside `App.tsx`.

## Development

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

## Building

To compile the tsx sources into jsx files with declarations into the `dist/lib` folder, run

```
npm run build
npm run compile:jsx
```

## Releasing

To create a new release, run either of these commands, depending on the gravity of the release:

```
npm version patch
npm version minor
npm version major
```

The version command runs the `compile` script once, commits the newly created files and pushes the code and the new tag to the origin server.

## Publishing

To publish a new release, login as user `lmu-med-wad` with this command:

    npm login

Finally, to publish the new package to NPM, run this:

    npm publish

## Contributing

Feel free to fork, post issues etc. to this repository.
