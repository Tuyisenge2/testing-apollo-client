// module.exports = {
//   presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
// };
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esModules: true } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
};
