import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useHttp from "../hooks/use-http";

import { getSingleQuote } from "../lib/api";

import { DUMMY_QUOTES } from "./AllQuotes";

const QuoteDetail = () => {
  const params = useParams();
  const routeMatch = useRouteMatch();
  const quoteId = params.quoteId;
  console.log(routeMatch);
  console.log(params);
  console.log(params.quoteId);

  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);
  console.log("quoteData", quote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  //   const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!quote.text) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={routeMatch.path} exact>
        <div className="centered">
          <Link to={`${routeMatch.url}/comments`} className="btn--flat">
            Comments
          </Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
