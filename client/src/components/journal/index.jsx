import { useQuery } from "@apollo/client";
import JournalRow from "./JournalRow";
import Spinner from "../assets/Spinner";
import { GET_JOURNAL } from "../../queries/journalQueries";
import JournalForm from "./JournalForm";
import "./Journal.css";

export default function Journal() {
  const { loading, error, data } = useQuery(GET_JOURNAL);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong:</p>;

  return (
    <>
      <div className="journalContainer">
        <div id="journalForm">
          <JournalForm />
        </div>
        {!loading && !error && (
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.journals.map((journal) => (
                <JournalRow key={journal.id} journal={journal} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
