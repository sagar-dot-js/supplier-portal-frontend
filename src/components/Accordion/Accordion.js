import React from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  AccordionTitleContainer,
  AccordionWrapper,
  Icon,
} from "./Accordion.style";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";

const data = [
  {
    title: "Item 1",
    content:
      "An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.",
  },
  {
    title: "Item 2",
    content:
      "An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Item 3",
    content:
      "An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
];

export default function Accordion({ children, ...restProps }) {
    console.log(children)
  //   const [selected, setSelected] = useState(null);

  //   const toggle = (i) => {
  //     if (selected === i) {
  //       return setSelected(null);
  //     }

  //     setSelected(i);
  //   };

  return (
    // <AccordionWrapper>
    //   <AccordionContainer>
    //     {data.map((item, i) => {
    //         console.log(i, item)
    //       return (
    //         <AccordionItem>
    //           <AccordionTitleContainer onClick={() => toggle(i)}>
    //             <AccordionTitle>{item.title}</AccordionTitle>
    //             {/* <Icon><RiArrowDownSLine/></Icon> */}
    //             {/* <Icon>{setSelected === i ? "-" : "+"}</Icon> */}
    //             <span>{setSelected === i ? "-" : "+"}</span>
    //           </AccordionTitleContainer>
    //           <AccordionContent>{item.content}</AccordionContent>
    //         </AccordionItem>
    //       );
    //     })}
    //   </AccordionContainer>
    // </AccordionWrapper>

    <AccordionContainer {...restProps}>{children}</AccordionContainer>
  );
}

// Accordion.Item = function AccordionItem({children, ...restProps}) {
//     return (
//         <Item {...restProps}>{children}</Item>
//     )
// }

// Accordion.Title = function AccordionTitle({children, ...restProps}) {
//     return (
//         <Title {...restProps}>{children}</Title>
//     )
// }

// Accordion.Content = function AccordionContent({children, ...restProps}) {
//     return (
//         <Content {...restProps}>{children}</Content>
//     )
// }
