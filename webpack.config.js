

module.exports={
    entry:"./src/shared/js/prueba06.js",
    output:{
        filename:'./src/shared/js/prueba06.bundle.js'
    },
    devtool:'source-map',
    module:{
        loaders:[
          {
              test:/\.js$/,
              exclude:[/node_modules/,/bower/],
              loader: 'babel',
              query: {
                 // plugins:["transform-decorators-legacy"],
                  presets:['es2015']
              }
          }  
        ]
    }
};