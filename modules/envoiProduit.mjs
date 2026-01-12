import { additionalFunction } from "../helpers/Additional.mjs"

export function envoiProduit(){
    const a = 10
    const b =20
    const c = additionalFunction(a,b)
    const y = document.querySelector(".fr")
    y.innerHTML = `la somme de ${a} et de ${b} est egale a ${c}`
}