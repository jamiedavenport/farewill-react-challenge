import React from "react";
import styled from "styled-components";
import {
  SPACING,
  BORDER,
  FONT,
  IMAGE,
  COLOR,
  CONTENT_WIDTH,
} from "../constants";
import quoteType from "../types/quote";

const StyledBlockquote = styled.blockquote`
  background: ${COLOR.WHITE};
  padding: ${SPACING.S};
  border-radius: ${BORDER.RADIUS.S};
  box-shadow: ${BORDER.SHADOW.M};
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLOR.GREY.LIGHT};
  margin: 0;

  @media only screen and (min-width: ${CONTENT_WIDTH}) {
    flex-direction: ${(props) =>
      props.characterDirection === "Right" ? "row-reverse" : "row"};
    justify-content: center;
    align-items: center;
  }
`;

const StyledImg = styled.img`
  height: ${IMAGE.SIZE};
  object-fit: contain;
`;

const StyledQuote = styled.p`
  text-align: center;
  font-size: ${FONT.SIZE.M};
  margin: 0;
  margin-top: ${SPACING.M};

  @media only screen and (min-width: ${CONTENT_WIDTH}) {
    margin-top: 0;
    margin-${(props) =>
      props.characterDirection === "Right" ? "left" : "right"}: ${SPACING.M};
  }
`;

const Quote = ({ quote }) => {
  const { quote: quoteText, character, image, characterDirection } = quote;

  return (
    <StyledBlockquote characterDirection={characterDirection}>
      <StyledImg src={image} alt={character} />
      <StyledQuote>{quoteText}</StyledQuote>
    </StyledBlockquote>
  );
};

Quote.propTypes = {
  quote: quoteType,
};

export default Quote;
