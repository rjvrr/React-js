function Hello(){
  let myName = "Rajbir"

  let surname = () => {
    return "Rawat"
  }
  return <h1>Hello! this is {myName} {surname()}</h1> 
  //We can use {} to add js code in between the html like tags
}

export default Hello;