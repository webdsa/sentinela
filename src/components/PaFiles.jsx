export function PaFiles(props) {
  return (
    <>
      <h1>PA Files</h1>
      <table className="files">
        <thead>
          <tr>
            <th>Arquivos</th>
            <th>Categoria</th>
            <th>Observações</th>
            <th>Changelog</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="https://files.internetdsa.com/themes/pa-theme-sedes.zip" target="_blank">pa-theme-sedes.zip</a>
            </td>
            <td>Tema pai</td>
            <td>&nbsp;</td>
            <td><a href="https://github.com/igrejaadventista/pa-theme-sedes/blob/master/CHANGELOG.md" target="_blank">link</a></td>
          </tr>
          <tr>
            <td><a href="https://files.internetdsa.com/themes/pa-theme-sedes-child.zip"
              target="_blank">pa-theme-sedes-child.zip</a></td>
            <td>Tema filho</td>
            <td>Depende do tema pai</td>
            <td><a href="https://github.com/igrejaadventista/pa-theme-sedes-child/blob/master/CHANGELOG.md" target="_blank">link</a></td>
          </tr>
          <tr>
            <td><a href="https://files.internetdsa.com/plugins/advanced-custom-fields-pro.zip"
              target="_blank">advanced-custom-fields-pro.zip</a></td>
            <td>Plugin</td>
            <td>Obrigat&oacute;rio</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><a href="https://files.internetdsa.com/plugins/cloudflare.zip" target="_blank">cloudflare.zip</a></td>
            <td>Plugin</td>
            <td>Opcional</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><a href="https://files.internetdsa.com/wp/pt_BR.zip" target="_blank">pt_BR.zip</a></td>
            <td>Bundle</td>
            <td>Instala&ccedil;&atilde;o completa em PT</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><a href="https://files.internetdsa.com/wp/es_ES.zip" target="_blank">es_ES.zip</a></td>
            <td>Bundle</td>
            <td>Instala&ccedil;&atilde;o completa em ES</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><a href="https://www.dropbox.com/s/spu46l5hqucmer4/Template_Slider_PA.psd?dl=0" target="_blank">Slider</a></td>
            <td>Assets</td>
            <td>Modelo do slider&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
