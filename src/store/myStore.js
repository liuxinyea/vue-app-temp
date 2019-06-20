function Store(){
    this.debug=true;
    this.state={
      panVer: 20,
      newPrice:{},
      showWindowPop:false
    };
    this.setState=(name, value)=>{
      if(this.debug){
        let stateProp={stateName:name,stateValue:value};
        console.log(stateProp);
      }
      this.state[name]=value;
  }
}
export default new Store();
