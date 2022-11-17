import {gql} from "@apollo/client";
const query = {
  getMessages: gql`
  query {
    getMessages
     {
      id username message date
    }
  }
  `,
  SubscribeMessages: gql`
  subscription {
    newMessage{
      id username message date
    }
  }
  `,
};

export default query;