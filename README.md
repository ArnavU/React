# About NPM 
npm - everything except Node Package Manager

It is a package manager for the JavaScript programming language and the default package manager for Node.js. npm is used to manage and distribute packages, which are reusable chunks of code or libraries that can be easily integrated into your JavaScript projects.

# What are Web Application Bundlers? 
--> A web application bundler is a tool that simplifies the process of ***managing and optimizing the various assets*** and resources used in a web application. These assets can include JavaScript files, CSS stylesheets, images, and other types of files. The primary goals of a bundler are to ***improve performance, reduce load times, and streamline the development and deployment workflow.***

Here are key features and functions of web application bundlers:

### ***Dependency Resolution:***
Bundlers analyze the dependencies within your project, including JavaScript modules, CSS imports, and other resources. They create a dependency graph to understand the relationships between different files.

### ***Bundle Creation:***
The bundler combines multiple files and dependencies into a single or a few bundles. This reduces the number of HTTP requests required to load a page, which can significantly improve loading times.

### ***Code Splitting:***
Some bundlers support code splitting, a technique that allows developers to split their code into smaller chunks. These chunks are loaded dynamically, improving initial page load times and enabling more efficient use of resources.

### ***Minification:***
Bundlers typically minify JavaScript and CSS files by removing unnecessary characters, whitespace, and comments. Minification reduces file sizes, making them quicker to download and improving overall performance.

### ***Transpilation:***
Bundlers often integrate with transpilers like Babel to convert code written in newer JavaScript versions (ES6, ES7, etc.) into an older version (ES5) that is compatible with a broader range of browsers.

### ***Asset Optimization:***
Web application bundlers may optimize other assets, such as images, by compressing them or converting them to more efficient formats.

### ***Source Maps:***
Bundlers can generate source maps, which provide a mapping between the original source code and the bundled, minified, or transpiled code. This aids in debugging and error tracking.

### ***Hot Module Replacement (HMR):***
Some bundlers support HMR, a feature that allows developers to see changes instantly without a full page reload during development. This speeds up the development process.

### Popular web application bundlers include:

- Webpack: A powerful and flexible bundler that supports a wide range of configurations and plugins. It is widely used in the JavaScript ecosystem.

- Parcel: A zero-configuration bundler that simplifies the setup process and provides a fast and efficient build system.

- Rollup: A module bundler designed for JavaScript libraries, but it can be used for applications as well. It focuses on creating smaller bundles.

- Browserify: An older bundler that primarily focuses on bundling JavaScript modules and making them compatible with the browser.

install parser - *npm install -D parcel* <br>
all the code of parcel and its dependencies are downloaded in node_modeuls folder

![node moules meme](https://img.devrant.com/devrant/rant/r_760537_vKvzh.jpg)

[parcel documentation](https://parceljs.org/)

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles
