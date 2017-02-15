export default function (state = null, action){
  switch(action.type){
  case "getWeather":
  console.log(action.payload)
  return (action.payload)

  case "somethingElse":
  // do stuff
}
  return state;
}
