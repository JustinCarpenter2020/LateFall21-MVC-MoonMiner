import { ProxyState } from "../AppState.js"
import {upgradeService} from '../Services/UpgradeService.js'

function _draw() {
  let template = ''
  ProxyState.upgrades.forEach(u => template += u.buttonTemplate)
  document.getElementById('buttons').innerHTML = template
}
function _drawFlow() {
  document.getElementById('flow').innerHTML = `${ProxyState.flow}`
}
export class UpgradeController{
  constructor(){
    ProxyState.on('flow',  _drawFlow)
    ProxyState.on("upgrades", _draw)
    setInterval(this.collectAutos, 3000)
    _draw()
  }
  collectAutos() {
    console.log("collecting autos")
  }

  scratch(){
   upgradeService.scratch()
   let audio = document.getElementById('scratch')
   // @ts-ignore
   audio.play()
   // @ts-ignore
   setTimeout(() => { audio.pause()}, 2000)
  }

  buyUpgrade(name){
    upgradeService.buyUpgrade(name)
  }

  shake() {

    document.querySelectorAll('div').forEach(d => d.classList.add('shake'))
    let BASS = document.getElementById("Bass")
    // @ts-ignore
    BASS.play()
    // document.querySelectorAll('div').forEach(d => d.classList.add('shake'))
  
  setTimeout(() => {
    document.querySelectorAll('div').forEach(d => d.classList.remove('shake'))
    let BASS = document.getElementById("Bass")
    // @ts-ignore
    BASS.pause()
  }, 6000)
}
}


