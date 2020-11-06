


const set_name =() =>{
return(dispatch)=>{
    let users = {
        name:this.state.name ,
        price:this.state.price,
        image:this.state.image,
        location:this.state.location,
        description:this.state.description,
       
      }
    dispatch({
        type: "SETUSER", payload:users
      
    })
  
}
}

export {
        set_name
    }