import {gql} from "@apollo/client";
const substriptions = {
  
  subscribeMessages: gql`
  subscription{
    newMessage{
      id message
    }
  }
  `,
};

export default substriptions;