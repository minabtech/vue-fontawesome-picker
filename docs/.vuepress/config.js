module.exports = {
  title: "Vue Font Awesome Picker",
  description: "Font Awesome Icon Picker Component For Vue",
  head: [
    [
      "link",
      {
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css",
        rel: "stylesheet",
        type: "text/css"
      }
    ]
  ],
  themeConfig: {
    sidebar: {
      "/": [
        {
          title: "Getting Started",
          collapsable: false,
          children: [["guide/install", "Installation"]]
        },
        {
          title: "Examples",
          collapsable: false,
          children: [["examples/basic", "Basic"], ["examples/slots", "Slots"]]
        },
        {
          title: "Templating & Styling",
          collapsable: false,
          children: [["guide/css", "CSS & Selectors"], ["guide/slots", "Slots"]]
        },
        {
          title: "API",
          collapsable: false,
          children: [["api/props", "Props"], ["api/events", "Events"]]
        }
      ]
    }
  }
};
