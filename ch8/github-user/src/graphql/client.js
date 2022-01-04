import { GraphQLClient } from "graphql-request";

const token = process.env.REACT_APP_GITHUB_TOKEN;

export const query = `
  query findRepos($login: String!){ 
    user(login: $login){
      id
      login
      name
      location
      avatar_url: avatarUrl
      repositories(first: 100){
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;

export const client = new GraphQLClient(
  "https://api.github.com/graphql",
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);
