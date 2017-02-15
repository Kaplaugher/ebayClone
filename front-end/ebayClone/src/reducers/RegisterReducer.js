export default function (state = [], action){
  switch(action.type){
  case "Register":
  console.log(action.payload)
  return (action.payload)
}
  return state;
}
