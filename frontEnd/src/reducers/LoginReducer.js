export default function(state = [], action){
	// console.log(action.type);
	switch(action.type){
		case "LOGIN":
			// console.log("I'm the register reducer, and some action called REGISTER!!!");
			// console.log(action.payload);
			return action.payload
	}
	return state;
}
