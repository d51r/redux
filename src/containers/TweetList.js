import React from 'react'
import {connect} from 'react-redux'

const TweetList = (props) => {
  return (
    <div>
      {props.tweets.map((tweet) => <div key={tweet.id}>{tweet.text}</div>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}

export default connect(mapStateToProps)(TweetList);