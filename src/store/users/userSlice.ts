interface User {
    id:string;
    name: string;
    vote: number;
  }
  
  const initialState: User = {
    id:"",
    name: "",
    vote: 0,
  };
  
 export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case "userName/update":
        return { ...state, name: action.payload };
  
      default:
        return state;
    }
  }
  
  export function userNameUpdate(newName: string) {
    return { type: "userName/update", payload: newName };
  }