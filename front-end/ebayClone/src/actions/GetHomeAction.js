import $ from 'jquery';

export default function(){
  var thePromise = $.getJSON('http://localhost:3000/getHomeAuctions')
  return {
    type: "GET_HOME",
    payload: thePromise
  }
}
