import AppDispatcher from '../dispatcher.jsx';

export default{
  receivedTweets(rawTweets){
    console.log(3, "received tweets");
    //console.log(3, rawTweets);
    AppDispatcher.dispatch({
      actionType: "RECEIVED_TWEETS",
      rawTweets
    })
  },
  receivedTweet(rawTweet){
    AppDispatcher.dispatch({
      actionType: "RECEIVED_TWEET",
      rawTweet
    })
  }
}
