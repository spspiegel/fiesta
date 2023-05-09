import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  'https://xllwbfbywxjxvqvwpnei.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsbHdiZmJ5d3hqeHZxdndwbmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMTY1NDYsImV4cCI6MTk5ODc5MjU0Nn0.jKaN0Xv3uzHJPYyBUQVIL0DABUwYTvhuNcZdQZSO-wk'
)

const { data } = await supabase.from('cae').select()
console.log(data)

const url = window.location.search
const id = new URLSearchParams(url).get('p')


let index
for (const i in data) {
  if(data[i].id == id) {
    console.log(i)
    index = i

  }
}

const {cae,cuit,denom,fechaEmision,nroComp,pVenta,tipoComp} = data[index]


document.getElementById('p_CUIT').value = cuit
document.getElementById('s_cuit').innerHTML = cuit

document.getElementById('s_denom').innerHTML = denom

document.getElementById('p_CAI').value = cae
document.getElementById('s_cai').innerHTML = cae

document.getElementById('p_fch_emision').value = fechaEmision
document.getElementById('s_fch').innerHTML = fechaEmision

document.getElementById('tipoComp').value = tipoComp
document.getElementById('s_cbte').innerHTML = tipoComp

document.getElementById('p_pto_vta').value = pVenta
document.getElementById('p_nro_cbte').value = nroComp
document.getElementById('vta-comp').innerHTML = `${pVenta}-${nroComp}`