const glob = require("glob");

module.exports = {
  title: "HospitalAid Info",
  head: [
    ["script", { src: "https://d3js.org/d3.v4.min.js" }],
    [
      "script",
      { src: "https://opensource.zalando.com/tech-radar/release/radar-0.5.js" }
    ]
  ],
  plugins: [
    "vuepress-plugin-mermaidjs",
    [
      "vuepress-plugin-medium-zoom",
      {
        selector: ".theme-default-content img",
        options: {
          margin: 24,
          scrollOffset: 0
        }
      }
    ]
  ],
  themeConfig: {
    nav: [{ text: "Developers Start Here", link: "/developers/" }],
    sidebar: {
      "/developers/": [
        "",
        "architecture",
        "technology",
        "radar",
        "aid",
        "hospital",
        "account",
        "conduct"
      ]
    },
    displayAllHeaders: true
  },
  base: "/info/"
};
