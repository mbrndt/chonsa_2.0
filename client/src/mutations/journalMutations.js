import { gql } from "@apollo/client";

const DELETE_JOURNAL = gql`
  mutation deleteJournal($id: ID!) {
    deleteJournal(id: $id) {
      id
      entry
      date
    }
  }
`;

export { DELETE_JOURNAL };
