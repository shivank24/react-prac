import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useHttp from "../hooks/use-http";

import { getAllQuotes } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "abc", text: "React is fun !!!" },
  { id: "q2", author: "xyz", text: "React is great !!!" },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: quotesData,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );

  if (error) return <p className="centered focused">{error}</p>;

  if (status === "completed" && (!quotesData || quotesData.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={quotesData} />;
};

export default AllQuotes;
export { DUMMY_QUOTES };
