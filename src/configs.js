const nodeExpress = {
  builds: [
    {
      src: "src/index.js",
      use: "@now/node-server"
    }
  ],
  routes: [{ src: "/.*", dest: "src/index.js" }]
};

module.exports = {
  nodeExpress
};
