# nikoboi.dev

>> This README is being updated.

This repository contains my website, which contains several lightweight, open-source web tools. All tools are fully client-side, easy to use, and open-source under the **GPLv3 License**.

## Overview of Tools

| Site | Description | Live | README & Source |
| - | - | - | - |
| **Home** | Simple link portal | [Home](https://nikoboi.dev/) | [README](#nikoboidev) |
| **Bingo** | Very simple, clean and Open-Source Bingo host and client. | [Bingo](https://nikoboi.dev/bingo) | [README](bingo/README.md) |
| **Encryptor** | Easily encrypt and decrypt your messages, because fuck Chat Control. | [Encrypt](https://nikoboi.dev/encrypt) | [README](encrypt/README.md) |
| **Open Links** | Quickly open multiple URLs in new browser tabs. | [Open Links](https://nikoboi.dev/links) | [README](links/README.md) |
| **Userscript Safety Guide** | A simple tutorial to guide you in safe installation and use of userscripts. | [Safety](https://nikoboi.dev/js/safety) | [Source](js/safety) |

## Home

A simple, free and open-source portal where all of my projects and social media accounts can be found. The code is easily tweakable, so others can create their own social portals based on this project (feel free to do so :D). Most socials have icons in [`/assets/svg/brand/`](assets/svg/brand).

### Features

- Centralized hub for all social media links.
- Clean, minimal interface.
- Fully open-source and easily forkable for personal use.

### Usage

**Open Live Version**:
- [https://nikoboi.dev/](https://nikoboi.dev/)
- Or Download & Run/Edit Locally:
  - The main HTML file is `index.html`, and the main CSS file is `style.css`.

### Screenshot

![Screenshot of Root](assets/screenshot/root-2025-11-27-12-06-39.png)

## Repository Structure

>> Not a **full** tree. Only relevant bits, and examples where relevant. See [tree](/tree.txt) for every file.

```text
.
├── assets
│   ├── logo
│   │   ├── *.ico
│   │   ├── *.jpeg
│   │   ├── *.png
│   │   └── *.svg
│   │
│   ├── screenshot
│   │   └── *.png
│   │
│   ├── svg
│   │   ├── brand
│   │   │   └── *.svg
│   │   │
│   │   ├── nikoboi
│   │   │   └── *
│   │   │
│   │   └── regular
│   │       └── *.svg
│   │
│   └── clippy.png
│
├── bingo
│   ├── host
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   │
│   ├── play
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   │
│   ├── index.html
│   ├── README.md
│   └── style.css
│
├── encrypt
│   ├── index.html
│   ├── README.md
│   ├── script.js
│   ├── style.css
│   └── test.js
│
├── js
│   └── safety
│       ├── index.html
│       └── style.css
│
├── links
│   ├── index.html
│   ├── README.md
│   ├── script.js
│   └── style.css
│
├── player
│   ├── index.html
│   ├── README.md
│   ├── script.js
│   └── style.css
│
├── sh
│   ├── git
│   │   ├── bulk
│   │   │   └── *
│   │   │
│   │   ├── clone
│   │   │   └── *
│   │   │
│   │   ├── repo
│   │   │   └── *
│   │   │
│   │   ├── setup
│   │   │   └── *
│   │   │
│   │   └── ssh
│   │       └── *
│   |
│   └── utils
│       ├── compare
│       ├── sort-file
│       └── test123.txt
│
├── CNAME
├── favicon.ico
├── index.html
├── LICENSE
├── README.md
├── robots.txt
├── sitemap.xml
├── style.css
├── todo.txt
└── tree.txt

37 directories, 905 files
```

## Contributing

Feel free to fork this repository and submit issues or pull requests if you have any suggestions or improvements. If you encounter any bugs or have feature requests, please open an issue.

## Credits

Created by **[Nikoboi](https://github.com/NikoboiNFTB/)**

JavaScript fine-tuned with **[ChatGPT](https://chatgpt.com/)**

Theme inspired by the great nation of **Finland** 🇫🇮 and the perfectly cromulent color **black**.

## License

This project is licenced under the GNU General Public License V3. See [LICENSE](LICENSE) for details.
