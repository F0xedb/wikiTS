[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/F0xedb/wikiTS">
    <img src="./logo.svg" alt="Logo" width="150" height="200">
  </a>

  <h3 align="center">WikiTS</h3>

  <p align="center">
    A modern yet configurable and lightweight wiki
    <br />
    <a href="https://github.com/F0xedb/wikiTS"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wiki-demo.odex.be">View Demo</a>
    ·
    <a href="https://github.com/F0xedb/wikiTS/issues">Report Bug</a>
    ·
    <a href="https://github.com/F0xedb/wikiTS/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

WikiTS is a simple declarative way of writing wikis.
It features a modern looking yet simple frontend coupled with basic api.
WikiTS also comes with a tool helping you convert existing markdown into a WikiTS compatible format.
Alternatively you can write the declarations in either json or yaml

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

All you need is `docker` and `docker-compose`
Or if you don't want to use those you need the following dependencies:

- Node
- NPM
- Typescript
- Angular cli

If you wish to generate the wiki data or convert existing data you need the following:

- Python3
- PyYAML

### Installation

#### Installation without docker

1. Clone the wikiTS

```sh
git clone https://github.com/F0xedb/wikiTS.git
```

2. Build the declaration file

```sh
python -m generator -j -i yamlfile
# or with a yaml directory
python -m generator -j -i yamldir
```

3. move declaration file to the right location

```sh
mv declaration.json api/
```

4. Install api dependencies

```sh
cd api
npm install
```

5. Compile api

```sh
tsc server.ts
```

6. Launch api

```sh
node server.js
```

7. Install angular dependencies

```sh
cd wiki
npm install
```

8. Build angular application

```
ng build
```

> The angular application can now be deployed on a webserver.
> The files to serve are located in wiki/dist/wiki

#### Installation with docker

1. Generate compiled files

```sh
# wait for everything to complete
docker-compose -f docker-compose-generate up
```

2. Deploy application

```sh
docker-compose up
# Alternatively a traefik V2 example is provided
docker-compose -f docker-compose-traefik.yaml up
```

Don't forget to change all environment settings.
Each file you must edit is shown below:

- api/environment.ts
- wiki/src/environment/environment.ts

Make sure you point all domains to your instance eg localhost or your domain.

<!-- USAGE EXAMPLES -->

## Usage

You should visit the wikiTS page if you want to see how to use it.

_For more examples, please refer to the [Documentation](https://wiki-demo.odex.be)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/F0xedb/wikiTS/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

F0xedb - tom@odex.be

Project Link: [https://github.com/F0xedb/wikiTS](https://github.com/F0xedb/wikiTS)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [F0xedb](https://github.com/F0xedb/wikiTS)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/F0xedb/wikiTS.svg?style=flat-square
[contributors-url]: https://github.com/F0xedb/wikiTS/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/F0xedb/wikiTS.svg?style=flat-square
[forks-url]: https://github.com/F0xedb/wikiTS/network/members
[stars-shield]: https://img.shields.io/github/stars/F0xedb/wikiTS.svg?style=flat-square
[stars-url]: https://github.com/F0xedb/wikiTS/stargazers
[issues-shield]: https://img.shields.io/github/issues/F0xedb/wikiTS.svg?style=flat-square
[issues-url]: https://github.com/F0xedb/wikiTS/issues
[license-shield]: https://img.shields.io/github/license/F0xedb/wikiTS.svg?style=flat-square
[license-url]: https://github.com/F0xedb/wikiTS/blob/master/LICENSE.txt
[product-screenshot]: https://tos.pbfp.xyz/images/logo.svg
