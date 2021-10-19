import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Private
// function _draw() {
//   let values = ProxyState.values;
//   let cardsTemplate = ''
//   values.forEach(v => cardsTemplate += v.CardTemplate)
//   document.getElementById("app").innerHTML = /*html*/`
//   <div class="my-3">
//     <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.addValue()">Add Value</button>  
//     <div class="values d-flex flex-wrap my-3">
//       ${cardsTemplate}
//     </div>
//   </div>
//   `
// }

//Public
export class ValuesController {
  constructor() {
    
  // setInterval(() => {console.log("interval")}, 3000)
  }

  addValue() {
    let audio = document.getElementById('scratch')
    // @ts-ignore
    audio.play()
    // @ts-ignore
    setTimeout(() => { audio.pause()}, 2000)
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
