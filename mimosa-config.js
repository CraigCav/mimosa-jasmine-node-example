exports.config = {
  modules: ["lint", "copy", "jasmine-node"],
  watch: {
    sourceDir: "src",
    compiledDir: "lib",
    javascriptDir: null
  },
  jasmine_node: {
    specFolders: ["tests"],
    watch: ["src"],
    coffee: true
  }
}