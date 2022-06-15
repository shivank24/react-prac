import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "abc", text: "React is fun !!!" },
  { id: "q2", author: "xyz", text: "React is great !!!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default AllQuotes;
export { DUMMY_QUOTES };
