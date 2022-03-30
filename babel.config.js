module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                browsers: '> 3%'
                // browsers: '> 3%, ie 11' // ie 11 transpiles classes
            }
        }],
        '@babel/preset-typescript'
    ]
};
