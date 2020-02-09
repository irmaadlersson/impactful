# Impactful

Making impact easy for you

---

Humblebee Frontend boilerplate

## Prerequisites

### Node

- [Node >= 11.7.0](https://nodejs.org/en/)

_NOTE_: we highly recommend you to use `nvm` to handle different Node versions:

- [NVM](https://github.com/nvm-sh/nvm)

### Package manager (just use your favorite one)

- [Yarn](https://yarnpkg.com/lang/en/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Project

- Environment parameters

This project uses some environment-specific parameters that you can and/or need to change for different environments.

Check the `.env.example` for the list of parameters you can set-up,
If you are not sure about those, just ask.

## Installation

Install the dependencies

`yarn install`

## Usage

#### Development

Locally, you can take advantage of the `internals/scripts/dev-server.js` script, which has both SSR & HMR support.
You can customise to your preferences:

- the listening port (defaults to 3000)
- the listening hostname (defaults to 'localhost')
- enable HTTPS (disabled by default, you can enable it by providing paths to local certificates)

--> https://blog.filippo.io/mkcert-valid-https-certificates-for-localhost/
(Not required by the application itself, but can be useful to test some HTTPS-only web features)

You can use the following script to start this server using `nodemon` to automatically restart the process.

`yarn dev`

#### Plop generators

You can benefit from plop templates to generate snippets from the command line.

Follow the instructions to [install plop](https://plopjs.com/documentation/#getting-started).

Or just use the local script

`yarn plop`

A few templates are provided inside the `/templates` folder.

#### Figma and Figmagic

Figmagic is a CLI tool fetching design tokens from a Figma document, and converting it into JS variables.

Make sure to add environment variables for FIGMA_URL (id of your document) and FIGMA_TOKEN (valid figma API key linked to the document).

More instructions at [https://github.com/mikaelvesavuori/figmagic](https://github.com/mikaelvesavuori/figmagic).

## Deployment

_IMPORTANT_

Before deploying, please review the PWA manifests files (e.g. `public/index.html`, `public/assets/manifest.webmanifest`)

Notice that this project uses service workers (thanks to the Workbox project) to cache all assets in your browser cache.
