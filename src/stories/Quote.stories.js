import React from "react";
import Quote from "../components/Quote";

export default {
  title: "Farewill/Quote",
  component: Quote,
};

const Template = (args) => <Quote {...args} />;

export const CharacterLeft = Template.bind({});
CharacterLeft.args = {
  quote: {
    quote:
      'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Left",
  },
};

export const CharacterRight = Template.bind({});
CharacterRight.args = {
  quote: {
    quote:
      'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right",
  },
};
