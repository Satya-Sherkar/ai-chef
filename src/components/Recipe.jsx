import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
  return (
    <section className="ai-suggested-recipe">
      <h2>Chef AI recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
