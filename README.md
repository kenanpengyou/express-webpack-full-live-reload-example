# express-webpack-full-live-reload-example
A workflow with full live reload for webpack&express application.

The explaining post could be found [here](http://acgtofe.com/posts/2016/02/full-live-reload-for-express-with-webpack).

This branch `master` is for webpack 2, use branch `webpack_1` if you need the older version.

## Start

1. Clone this repo.

2. Install dependencies.

        npm install
        npm install supervisor -g

3. Try these out.

    * `npm start` to develop with full live reload.
    * `npm run browsersync` is a alternative for development. It may be faster when modifying the express views
    (templates) only.
    * `npm run production` to emit outputs and run the express for production.
    * `npm run build` if you care about what is hold in memory for development...

## Preview

![example preview](https://raw.githubusercontent.com/kenanpengyou/kenanpengyou.github.io/master/assets/used-images/projects/express-webpack-full-live-reload-example/preview.gif)
