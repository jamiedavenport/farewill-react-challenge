import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import Header from "./Header";
import QuoteGrid from "./QuoteGrid";
import fetchQuotes from "../fetchQuotes";
import { CONTENT_WIDTH, SPACING } from "../constants";

const StyledContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING.L};
`;

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadQuotes = async () => {
    // TODO: Handle error state
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

        {isLoading ? <span>Loading...</span> : <QuoteGrid quotes={quotes} />}
      </StyledContentWrapper>
    </>
  );
};

export default App;
