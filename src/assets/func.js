import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  'https://xllwbfbywxjxvqvwpnei.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsbHdiZmJ5d3hqeHZxdndwbmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMTY1NDYsImV4cCI6MTk5ODc5MjU0Nn0.jKaN0Xv3uzHJPYyBUQVIL0DABUwYTvhuNcZdQZSO-wk'
)


// DOM Vars
// Elementos de información
const elementoPCuit = document.getElementById('p_CUIT') //value
const elementoSCuit = document.getElementById('s_cuit') //inner

const elementoSDenom = document.getElementById('s_denom') //inner

const elementoPCai = document.getElementById('p_CAI') //value
const elementoSCai = document.getElementById('s_cai') //inner

const elementoPFechaEmision = document.getElementById('p_fch_emision') //value
const elementoSFechaEmision = document.getElementById('s_fch') //inner

const elementoPTipoCbte = document.getElementById('tipoComp') //value
const elementoSTipoCbte = document.getElementById('s_cbte') //inner

const elementoPPtoVta = document.getElementById('p_pto_vta') //value
const elementoPNroCbte = document.getElementById('p_nro_cbte') //value
const elementoVtaCbte = document.getElementById('p_nro_cbte') //value

// Divs de status
const divEnabled = document.getElementById('divEnabled')
const divNotEnabled = document.getElementById('divNotEnabled')

//

const url = window.location.search
const id = new URLSearchParams(url).get('p')

const { data, error} = await supabase.from('cai').select('*').eq('id', id)

if(error) {
  console.log(error)
  setErrorData('UNEXPECTED SERVER ERROR')
}

if(data.length > 0) {
  setFormData(data)
} else if (data.length === 0) setErrorData('-')

if(data[0]?.enabled === true) {
  divEnabled.classList.remove('hidden')
  console.log(divEnabled)
} else if (data[0]?.enabled === false) {
  divNotEnabled.classList.remove('hidden')
}





function setFormData (data) {
  const { cai, cuit, denom, fechaEmision, nroComp, pVenta, tipoComp } =
  data[0]

  elementoPCuit.value = cuit
  elementoSCuit.innerHTML = cuit

  elementoSDenom.innerHTML = denom

  elementoPCai.value = cai
  elementoSCai.innerHTML = cai

  elementoPFechaEmision.value = fechaEmision
  elementoSFechaEmision.innerHTML = fechaEmision

  elementoPTipoCbte.value = tipoComp
  elementoSTipoCbte.innerHTML = tipoComp

  elementoPPtoVta.value = pVenta
  elementoPNroCbte.value = nroComp
  elementoVtaCbte.innerHTML = `${pVenta}-${nroComp}`
}

function setErrorData (errorSymbol) {
  elementoPCuit.value = errorSymbol
  elementoSCuit.innerHTML = errorSymbol

  elementoSDenom.innerHTML = errorSymbol

  elementoPCai.value = errorSymbol
  elementoSCai.innerHTML = errorSymbol

  elementoPFechaEmision.value = errorSymbol
  elementoSFechaEmision.innerHTML = errorSymbol

  elementoPTipoCbte.value = errorSymbol
  elementoSTipoCbte.innerHTML = errorSymbol

  elementoPPtoVta.value = errorSymbol
  elementoPNroCbte.value = errorSymbol
  elementoVtaCbte.innerHTML = `${errorSymbol}-${errorSymbol}`
}