import {gql} from "@apollo/client";
const substriptions = {
  
  subscribeMessages: gql`
  subscription{
    newMessage{
      username message date
    }
  }
  `,
};

export default substriptions;