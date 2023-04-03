const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
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
            title: "Remote",
        }),
    ],
};
