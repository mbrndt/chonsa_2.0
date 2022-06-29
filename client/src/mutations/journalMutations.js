import { gql } from "@apollo/client";

const ADD_JOURNAL = gql`
  mutation addJournal($title: String!, $content: String!) {
    addJournal(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

const DELETE_JOURNAL = gql`
  mutation deleteJournal($id: ID!) {
    deleteJournal(id: $id) {
      id
      title
      content
    }
  }
`;

export { ADD_JOURNAL, DELETE_JOURNAL };
