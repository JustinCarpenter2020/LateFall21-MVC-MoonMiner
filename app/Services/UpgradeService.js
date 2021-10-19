import { ProxyState } from "../AppState.js"

class UpgradeService{
  buyUpgrade(name) {
    let found = ProxyState.upgrades.find(u => u.name == name)
    if(found.price <= ProxyState.flow){
      found.quantity++
      ProxyState.flow -= found.price
      found.price *= 2
      ProxyState.upgrades = ProxyState.upgrades
    } else {
      return window.alert("No Flow Scrub")
    }
  }
  scratch() {
    ProxyState.flow++
    let total = 0
    ProxyState.upgrades.forEach(u => {
      if(u.type == "click"){
        total += (u.quantity * u.multiplier)
      }
    })
    ProxyState.flow += total
    console.log(ProxyState.flow)
  }

}


export const upgradeService = new UpgradeService()