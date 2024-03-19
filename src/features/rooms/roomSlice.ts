interface Room {
    id:string;
    name: string;
  }
  
  const initialState: Room = {
    id:"",
    name: "",
  };
  
 export default function roomReducer(state = initialState, action) {
    switch (action.type) {
      case "roomName/update":
        return { ...state, name: action.payload };
  
      default:
        return state;
    }
  }
  
  export function roomNameUpdate(newName: string) {
    return { type: "roomName/update", payload: newName };
  }