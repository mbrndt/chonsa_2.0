import { gql } from "@apollo/client";

const GET_JOURNAL = gql`
  query getJournal($id: ID!) {
    journal(id: $id) {
      id
      title
      content
      date
    }
  }
`;
export { GET_JOURNAL };
