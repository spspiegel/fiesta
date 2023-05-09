import React from '@astrojs/react'
import { fallback } from '../assets/example'

// supabase
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  'https://xllwbfbywxjxvqvwpnei.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsbHdiZmJ5d3hqeHZxdndwbmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMTY1NDYsImV4cCI6MTk5ODc5MjU0Nn0.jKaN0Xv3uzHJPYyBUQVIL0DABUwYTvhuNcZdQZSO-wk'
)

const { data } = await supabase.from('cae').select()

let doc = {}
if (data[0]) {
  doc = data[1]
} else {
  doc = fallback
}


// CSS

const captcha = `
#captcha {
  display: inline-block;
  position: relative;
  color: #ababab;
  font-family: Sans-serif;
  font-weight: bold;
  font-size: 24px !important;

  margin-bottom: -11px;
  padding: 5px;
  width: 110px;
  height: 36px;
  text-align: center;
  overflow: hidden;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

#captcha::after {
  top: -50px;
  left: -20px;
  width: 120px;
  height: 120px;
  color: transparent;
  content: 'aaaaa';
  padding: 5px;
  position: absolute;
  background: radial-gradient(
      circle,
      #b6b6b6 10%,
      transparent 11%
    ),
    radial-gradient(
      circle at bottom left,
      #b6b6b6 5%,
      transparent 6%
    ),
    radial-gradient(
      circle at bottom right,
      #b6b6b6 5%,
      transparent 6%
    ),
    radial-gradient(
      circle at top left,
      #b6b6b6 5%,
      transparent 6%
    ),
    radial-gradient(
      circle at top right,
      #b6b6b6 5%,
      transparent 6%
    );
  background-size: 3px 3px;
  background-color: transparent;
  opacity: 1;
  rotate: 60deg;
}`

const hidden = `
.hidden {
  display: none;
}`

const New = ({sub,text}) => {
  return (
    <div>
  {/*<GoTopButton />*/}
  <div className='container'>
    <div className='units-row'>
      <div className='unit-100'>
        <div className='separadorBlanco'></div>

        <h2 style='font-weight: 400;'>
          {sub ? sub : `Constatación de Comprobantes`}
        </h2>

        <p className='font-size-15 textJustify'>
          {
            text
              ? text
              : `Esta consulta permite a los receptores de comprobantes (facturas y documentos equivalentes clases "A", "B" o "C"), constatar que cada uno de ellos se encuentre autorizado por la AFIP. La presente consulta no ofrece información sobre la validez de las facturas y/o documentos equivalentes emitidos por Controladores o Impresoras Fiscales. Para ello deberá completar todos los datos del comprobante que se indican a continuación:`
          }
        </p>
      </div>
      <div className='separadorDottedSimple'></div>
      <div className='unit-100'>
        {/*<!-- FORMULARIO INICIO-->*/}
        <form
          name='aspnetForm'
          method='post'
          action='cae.aspx'
          id='aspnetForm'
        >
          <div>
            <div
              id='formularioDatos'
              className='unit-100'
              style='margin-top: 40px;'
            >
              <div className='units-row'>
                <div className='unit-30'>
                  <h6>Número de CUIT:</h6>
                </div>
                <div className='unit-70'>
                  <input
                  readOnly
                    type='text'
                    id='p_CUIT'
                    value={doc.cuit}
                    autoComplete='off'
                    maxLength='11'
                    className='numeric-only'
                    original-title='11 dígitos'
                    disabled
                  />
                </div>
              </div>
              <div className='units-row'>
                <div className='unit-30'>
                  <h6>Número de CAI:</h6>
                </div>
                <div className='unit-70'>
                  <input readOnly
                    type='text'
                    id='p_CAE'
                    autoComplete='off'
                    maxLength='14'
                    className='numeric-only'
                    original-title='14 dígitos'
                    disabled
                    value={doc.cae}
                  />
                </div>
              </div>
              <div className='units-row'>
                <div className='unit-30'>
                  <h6>Fecha de Emisión del Comprobante:</h6>
                </div>
                <div className='unit-70'>
                  <input readOnly
                    type='text'
                    id='p_fch_emision'
                    maxLength='10'
                    placeholder='DD/MM/AAAA'
                    className='hasDatepicker'
                    disabled
                    value={doc.fechaEmision}
                  />
                </div>
              </div>
              <div className='units-row'>
                <div className='unit-30'>
                  <h6>Tipo de Comprobante:</h6>
                </div>
                <div className='unit-70'>
                  <select
                    name='ctl00$cphBody$p_tipo_cbte'
                    id='ctl00_cphBody_p_tipo_cbte'
                    style='display: none;'
                  >
                    <option
                      defaultValue='selected'
                      value=''
                    ></option>
                  </select>
                  <span
                    className='custom-combobox'
                    style='width: 1896px;'
                  >
                    <input readOnly
                      disabled
                      title=''
                      className='custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left ui-autocomplete-input'
                      autoComplete='off'
                      value={doc.tipoComp}
                    />
                    <a
                      tabIndex='-1'
                      className='ui-button ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right'
                      role='button'
                      title=''
                    >
                      <span
                        className='ui-button-icon-primary ui-icon ui-icon-triangle-1-s'
                      ></span>
                      <span className='ui-button-text'></span>
                    </a>
                  </span>
                </div>
              </div>
              <div className='units-row'>
                <div className='unit-30'>
                  <h6>Punto de Venta - Número de Comprobante:</h6>
                </div>
                <div className='unit-70'>
                  <input readOnly
                    type='text'
                    id='p_pto_vta'
                    maxLength='5'
                    className='numeric-only'
                    disabled
                    value={doc.pVenta}
                  />
                  <span>&nbsp;-&nbsp;</span>
                  <input readOnly
                    type='text'
                    id='p_nro_cbte'
                    maxLength='8'
                    className='numeric-only'
                    disabled
                    value={doc.nroComp}
                  />
                </div>
              </div>
            </div>
            <div className='unit-100'>
              {/*<!-- CAPTCHA -->*/}

              <script>
              {/*
                // Captcha
                const caracteres =
                  '0123456789abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

                let captcha = ''

                const captchaText = document.getElementById('captcha')
                const captchaBox = document.getElementById(
                  'ctl00_cphBody_txtCaptcha'
                )

                const refreshBtn = document
                  .getElementById('imgRefresh')
                  .addEventListener('click', () => {
                    doCaptcha()
                  })

                function doCaptcha() {
                  captcha = ''
                  for (let i = 0; i < 5; i++) {
                    captcha +=
                      caracteres[Math.floor(Math.random() * caracteres.length)]
                  }

                  captchaText.innerHTML = captcha
                }

                doCaptcha()

                // Modal + Info

                const btnConsultar = document
                  .getElementById('btnConsultarDatos')
                  .addEventListener('click', () => {
                    validar()
                  })
                const btnLimpiar = document
                  .getElementById('btnLimpiar')
                  .addEventListener('click', () => {
                    window.location.replace(
                      'https://serviciosweb.afip.gob.ar/genericos/comprobantes/cae.aspx'
                    )
                  })
                const info = document.getElementById('success')
                const failure = document.getElementById('failure')

                function validar() {
                  if (captchaBox.value === captchaText.innerHTML) {
                    failure.classNameList.add('hidden')
                    info.classNameList.remove('hidden')
                    captchaBox.value = ''
                    doCaptcha()
                    setTimeout(() => {
                      info.scrollIntoView()
                    }, 500)
                  } else if (captchaBox.value !== captchaText.innerHTML) {
                    info.classNameList.add('hidden')
                    captchaBox.value = ''
                    doCaptcha()
                    failure.classNameList.remove('hidden')
                    captchaBox.focus()
                  }
                }*/}
              </script>

              <div className='units-row'>
                <div
                  className='unit-40'
                  style='max-width: 335px;'
                >
                  <h6>Ingrese los caracteres de la imagen:</h6>
                </div>
                <div className='unit-60'>
                  <p id='captcha'>&nbsp;</p>

                  <style>
                  {captcha}
                  </style>

                  &nbsp;
                  <input
                    type='button'
                    id='imgRefresh'
                    value='Actualizar'
                    className='gris'
                  />&nbsp;&nbsp;
                  <input
                    name='ctl00$cphBody$txtCaptcha'
                    type='text'
                    maxLength='5'
                    id='ctl00_cphBody_txtCaptcha'
                    className='txtCaptcha'
                    value=''
                    original-title='Respete mayúsculas y minúsculas'
                  />
                </div>
              </div>

              {/*<!-- CAPTCHA FIN -->*/}
            </div>
            <div className='separadorDottedSimple'></div>
            <div
              id='divBotones'
              className='unit-100'
            >
              <div className='units-row'>
                <div className='unit-100 textRight'>
                  <input readOnly
                    type='button'
                    id='btnConsultarDatos'
                    value='Consultar'
                    className='naranja'
                  />
                  <input readOnly
                    type='button'
                    id='btnLimpiar'
                    value='Modificar Consulta'
                  />
                  <input readOnly
                    type='button'
                    id='btnModificarConsulta'
                    value='Modificar Consulta'
                    style='display:none;'
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        {/*<!-- FORMULARIO FIN -->*/}
      </div>
    </div>
    <style>
    {hidden}
    </style>
    <div className='units-row'>
      <div
        className='unit-100 hidden'
        id='failure'
      >
        {/*<ErrorModal />*/}
      </div>
      <div
        className='unit-100 hidden'
        id='success'
      >
        <div
          id='divMensaje'
          style=''
          className=''
        >
          <div
            className='border-1 recuadroGrisClaro paddingInterno-5 marginBottom-20'
            style='border:1px solid #6E9C4E;'
          >
            <h3 style='font-weight: 400;'>
              <img
                src='https://serviciosweb.afip.gob.ar/genericos/comprobantes/images/verify.png'
                className='icon48 padding-10'
              />Los datos ingresados coinciden con una autorización otorgada por
              la AFIP.
            </h3>
          </div>
        </div>
        <div
          id='divDetalle'
          style='display: block;'
          className=''
        >
          <div className='border-1 recuadroGrisClaro marginBottom-20'>
            <ul className='arrowAzul'>
              <li>CUIT: <strong>{doc.cuit}</strong></li><li>
                Denominación: <strong>{doc.denom}</strong>
              </li><li>CAE: <strong>{doc.cae}</strong></li><li>
                Fecha de Emisión: <strong>{doc.fechaEmision}</strong>
              </li><li>
                Tipo de Comprobante: <strong>{doc.tipoComp}</strong>
              </li><li>
                Comprobante: <strong>{doc.pVenta}-{doc.nroComp}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default New