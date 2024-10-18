// libraries
import axios from "axios";

/*
  dar inja ma mikhaim function besazim ke biad data ro ba estefade az 'axios' begirim va harja ke bekhaim ba seda zadan function data
  ro begirim in kar baraye tamizi va chandbar estefade kardan code ast.

  ma miaim ye moteghayer 'client' misazim ke tush miakhaim 'config' baraye 'axios' moshakhas konim. yani amalan ba zadan 'axios.create' 
  ma nemune sefareshi az 'axios' misazim ke in ejaze ro mide tanzimat pishfarz baraye darkhast ha gharar bedim.

  miaim migim 'baseUrl' ke dakhel url mishe oun tike az link ke sabete masalan: "http://localhost:8000/products" dar inja bakhsh 
  "http://localhost:8000" sabete va tike akhar taghyir mikone pas baraye in ke yek bar url ro moshakhas konim va age ruzi 
  back-end kar oumad taghyir dad ma faghat yek ja taghyir midim va niazi nist har bar dasti in kar ro konim.

  hala har bar az 'client' estefade konim masalan 'client("/products")' inja 'axios' khod be khod miad darkhast be url 
  "http://localhost:8000/products" ersal mikone.

  vaghti miaim 'client' misazim 'axios' miad be surat default darkhast ro 'GET' migire ta zamani ke darkhast ro moshakhas konim.
*/

const client = axios.create({
  baseURL: "http://localhost:8000",
});

/*
  dar inja ma mikhaim 'async function' besazim ke biad data ro az API begire. vaghti ye function ro ba 'async' tarif mikonim behet
  ejaze mide az 'await' estefade konim. dar asl 'await' sabr mikone ye 'vade ya promise' takmil beshe va badesh edame code ro ejra mikone.
  in kar zamani mofide ke 'API call' be khater kondi internet ya server momkene tul bekeshe va nakhaim code haye badish ejra beshe.
  
  hala ma miaim migim in data momkene dir biad ke dalilesh shayad kondi internet ya shayad bad code zadan back-end va dar javascript 
  code az bala be tartib ejra mishe miad payin va zamani ke data dir mirese va code badi ejra mishe momkene ghabl residan data code ma 
  error bokhore pas bayad biaim begim zamani ke data ro mikhai begiri vaisa ta data biad badesh boro code badi ro ejra bokon ke in 
  kar ba estefade az 'async await' etefagh miofte.

  pas fahmidim ke "await client("/products");" in code mige ta zamani ke data az url khaste shode biad sabr kon badesh bia data ro 
  'return' kon.
*/

export async function getProductsAPI() {
  /*
    shoma zamani ke "const {data} = await client("/products");" az in code estefade mikonim yani az chizi be esm 'destructuring'
    estefade kardim. in be ma ejaze mide be tor mostaghim az darun object ke dar inja pasokh 'axios' ast; faghat oun chizi ro ke mikhaim
    estekhraj mikonim yani amalan az kol object faghat oun tike ke khastim ro bar midarim.

    dar inja pasokh 'axios' ye object masalan: 
    "
      {
        data: [...] // داده‌هایی که میخوای،
        status: 200,
        headers: {...}
      }
    "
    hala vaghti az '{data}' estefade mikonim ke behesh 'destructuring' migan faghat bakhsh 'data' to migire va niazi nist be surat
    'response.data' behesh dastresi dasht.

    ama vaghti "const data = await client("/products");" minevisi dare kol object ro dakhel 'data' ekhtesas mide va baraye dastresi
    be data dakhel object bayad az 'data.data' estefade konim.

  */

  // ba estefade az destructuring
  const { data } = await client("/products");
  // console.log(data);

  return data;

  // bedun destructuring
  // const data = await client("/products");
  // return data.data;
}

export async function getProductObjectAPI(id: string) {
  const { data } = await client(`/products/${id}`);
  // console.log(data);

  return data;
}
