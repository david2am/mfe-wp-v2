const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        publicPath: "http://localhost:8081/",
    },

    devServer: {
        port: 8081
    },
    
    plugins: [
        new ModuleFederationPlugin({
            name: "remote",
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
                "./add": "./src/add.js",
            }
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
};
