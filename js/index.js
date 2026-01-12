import { additionalFunction } from "../helpers/Additional.mjs"
import { envoiProduit } from "../modules/envoiProduit.mjs"

document.addEventListener("DOMContentLoaded",()=>{
    const j = "Hello "
    let timer = 35.4455555
    additionalFunction(j,timer)
  
   envoiProduit()
})