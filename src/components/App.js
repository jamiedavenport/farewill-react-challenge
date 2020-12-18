import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import Header from "./Header";
import QuoteGrid from "./QuoteGrid";
import fetchQuotes from "../fetchQuotes";
import { CONTENT_WIDTH, SPACING } from "../constants";

const StyledContentWrapper = styled.main`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING.L};
`;

const StyledQuoteWrapper = styled.div`
  margin-top: ${SPACING.L};
`;

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadQuotes = async () => {
    setIsLoading(true);
    const { data } = await fetchQuotes();
    setQuotes(data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <>
      <Header />

      <StyledContentWrapper>
        <Button onClick={() => loadQuotes()}>Load quotes</Button>

        <StyledQuoteWrapper>
          {isLoading ? <span>Loading...</span> : <QuoteGrid quotes={quotes} />}
        </StyledQuoteWrapper>
      </StyledContentWrapper>
    </>
  );
};

export default App;
