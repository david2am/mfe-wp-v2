const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
    output: {
        publicPath: "http://localhost:8081/",
    },

    devServer: {
        port: 8081,
        historyApiFallback: true,
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
