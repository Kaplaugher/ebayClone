export default function (state = [], action){
  switch(action.type){
  case "GET_HOME":
  console.log(action.payload)
  return (action.payload)
}
  return state;
}
