var path = require('path');
var srcPath = path.resolve(__dirname, "src"),
    distPath = path.resolve(__dirname, "dist");
var webpack = require('webpack');

var config = {
   entry: srcPath+'/main.js',
	
   output: {
      path:distPath,  
      filename: 'index.js',
   },
	
    devServer: { 
        proxy: { 
        '/**': {  //catch all requests
                target: '/index.html',  //default target
                secure: false,
                bypass: function(req, res, opt){ 
                    //your custom code to check for any exceptions
                    //console.log('bypass check', {req: req, res:res, opt: opt});
                    if(req.path.indexOf('/images/') !== -1 || req.path.indexOf('/public/') !== -1){
                        
                        return req.path;
                    }

                    if (req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html';
                    }
                }
            }
        },
        port: 8080
    },
	
   module: {
      loaders: [  
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        { 
             test: /\.css$/, 
             loader: "style-loader!css-loader" 
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
                
            query: {
                presets: ['es2015', 'react']
            }
        }
      ]
   },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}

module.exports = config;