import { gql } from "@apollo/client";

const GET_JOURNAL = gql`
  query getJournal {
    journals {
      id
      title
      content
    }
  }
`;
export { GET_JOURNAL };
