module.exports = function (app) {
    app.use('/', require('./page1'));
    app.use('/page2', require('./page2'));
};
