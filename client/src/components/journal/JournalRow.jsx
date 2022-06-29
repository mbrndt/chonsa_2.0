import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { DELETE_JOURNAL } from "../../mutations/journalMutations";
import { GET_JOURNAL } from "../../queries/journalQueries";
import "./Journal.css";

export default function JournalRow({ journal }) {
  const [deleteJournal] = useMutation(DELETE_JOURNAL, {
    variables: { id: journal.id },
    refetchQueries: [{ query: GET_JOURNAL }],
  });

  return (
    <tr>
      <td>{journal.title}</td>
      <td>{journal.content}</td>

      <td>
        <button onClick={deleteJournal}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
