function logDriverNames(drivers){
  drivers.map(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown){
  const newDrivers = drivers.filter(function(driver){
    return driver.hometown === hometown
  })
  newDrivers.map(function(driver){
    console.log(driver.name)
  })
}

const driversByRevenue = function (drivers){
  return drivers.slice().sort(function(a, b){
    return a.revenue - b.revenue
  })
}

const driversByName = function (drivers){
  return (drivers.slice().sort(function(first, second){
    return first.name.localeCompare(second.name)
  }))
}

const totalRevenue = function(drivers){
  return drivers.reduce(function(total, currentDriver){
    return currentDriver.revenue + total
  }, 0)
}

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length
}
