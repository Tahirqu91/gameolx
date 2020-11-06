
const iState ={
  current_card: {} 
}


export default (state = iState, action)=>{
  switch (action.type){
    case "SETUSER":
      return({
        ...state,
        current_card: action.payload
      })
    
      
  }
  return state;
}