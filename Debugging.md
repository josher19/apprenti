
# Debugging

:information_source: If you need to use your debugger extensively, you are probably not programming defensively enough. Use lots of small functions instead of a few big functions and don't assume your code will always follow "the happy path" of error-free code. Coding is not always :sun_with_face: and :rainbow:. Please `try` to `catch` your Errors. :baseball:

1. [The Absolute Easiest Way to Debug Node.js — with VS Code](https://itnext.io/the-absolute-easiest-way-to-debug-node-js-with-vscode-2e02ef5b1bad)
    - Let's try setting that up together

2. [Use your Chrome Browser as your debugger](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27)

    - `node --inspect-brk filename.js`
    - Open in Chrome: **chrome://inspect**

3. You can even debug Unit Tests such as [Jest](https://jestjs.io/docs/en/troubleshooting)
    ```
    node --inspect-brk node_modules/.bin/jest --runInBand # $ARGS
    # or on Windows
    node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand %ARGS%
    ```
4. :warning: Do not try these on insecure/open Wifi networks. More details in
[the Official NodeJS Docs](https://nodejs.org/en/docs/guides/debugging-getting-started/)


Final NodeJS debug logging tip:  Try
`DEBUG='*' node filename.js`
because many packages will log additional info if you set set `DEBUG='*'` if they use the [debug](https://www.npmjs.com/package/debug) npm package. No breakpoints, but a great way to check which database or websites you are visiting in your app, for example.
