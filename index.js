function findMatching(drivers, driverName){
    let findDriver = drivers.filter((name) =>
    name.toLowerCase().includes(driverName.toLowerCase()))
    return findDriver
}


function fuzzyMatch(drivers, query){
    let string = drivers.filter(function (element){
        if(query[0,1] === element[0,1]){
            return element
        }
    })
    return string
}


function matchName(drivers, string){
    let driverInfo = drivers.filter((element) => {
        if (string === element.name){
            return element
        }
    })
    return driverInfo
}


