import { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import client from '../utils/rq-graphql-client';

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        name
        email
      }
    }
  }
`;

const useUser = () => {
  const { data, isLoading, error } = useQuery('CURRENT_USER_QUERY', () =>
    client.request(CURRENT_USER_QUERY)
  );
  const user = data?.authenticatedItem;
  return { user, isLoading, error };
};

export default useUser;
