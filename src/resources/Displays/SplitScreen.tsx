import React from "react";
import styled from "styled-components";

export class Screens {
    width: number;
    height: number;
    layout: object;
    content: object;

    constructor(
        layout: object, content: object,
        width: number, height: number
        ){
        this.layout = layout;
        this.content = content;
        this.width = width;
        this.height = height;
    }
}

// export const SplitScreen = ({
//     children: Object,
//     leftWeight: Number,
//     rightWeight; Number,
// }) => {
//     const [ left, right ] = children;


// }