import React from "react";
import PropTypes from "prop-types";
import quoteType from "../types/quote";
import Quote from "./Quote";
import styled from "styled-components";
import { CONTENT_WIDTH, SPACING } from "../constants";

const StyledGrid = styled.section`
  display: grid;
  grid-gap: ${SPACING.S};

  @media only screen and (min-width: ${CONTENT_WIDTH}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const QuoteGrid = ({ quotes }) => (
  <StyledGrid>
    {quotes.map((quote) => (
      <Quote key={quote.quote} quote={quote} />
    ))}
  </StyledGrid>
);

QuoteGrid.propTypes = {
  quotes: PropTypes.arrayOf(quoteType).isRequired,
};

export default QuoteGrid;
