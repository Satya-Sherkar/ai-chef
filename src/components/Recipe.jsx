import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
  return (
    <section className="ai-suggested-recipe">
      <h2>Master AI Chef recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
