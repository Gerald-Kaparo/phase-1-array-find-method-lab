// code your solution here

const superbowlWin = (record) => {
    let denverBroncos = record.find(log => {
        if(log.result === "W"){
            return log;
        }
    })
    if(denverBroncos){
      return denverBroncos.year;
    }else{
      return denverBroncos
    }
    console.log(`Denver Broncos won the superbowl $find()`)
}