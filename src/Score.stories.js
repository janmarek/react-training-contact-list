import React from "react";

import {Score} from "./Score";

export default {
    title: "ContactListApp/Score",
    component: Score,
};

const Template = (args) => (
    <Score {...args} increaseDomaci={() => {}} increaseHoste={() => {}} />
);

export const Counting = Template.bind({});
Counting.args = {
    domaci: 1,
    hoste: 3,
};

export const Empty = Template.bind({});
Empty.args = {
    domaci: 0,
    hoste: 0,
};
