// libraries
import { ChangeEvent, useState } from "react";

// components
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

// context functions
import { useLoginContext } from "../../context/loginContext/LoginContext";

function Login() {
  const { handelLogin } = useLoginContext();

  /* 
    ma mitunim be jaye estefade az chand useState baraye value har input biaim az yek useState estefade konim vali bejash
    bayad yek object besazim va tush baraye value har input meghdar bezarim.
  */
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  /* 
    dar inja ma baraye in ke betunim value dakhel har input ro begirim pas bayad az ghabeliat 'onChange' estefade konim 
    bayad yek 'arrow function' benevisim va baraye zakhire 'value' marbut be input bayad az 'useState' estefade konim.
  */
  const handelChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    /*
        ma mitunim be jaye in ke vase har input yek 'onChange' motafavete besazim mitunim yek 'onChange' benevisim vali dakhelesh bayed 
        moshakhas konim ke 'value' marbut be kodum 'input' hast ke ba estefade az 'switch, case' in kar ro mikonim va baraye har input 
        yek 'name' mizarim.
      */

    /* 
        console.log(e);
        dakhel in 'event' meghdar ziadi vojud dare vali ba zadan 'event.target' manzur hamun 'input' hast ke taghyir peida karde
        hala baraye in ke tashkhis bedim taghyir marbut be kodum 'input' miaim migim 'event.target.name' ba in mitunim 'name' 
        marbut be kodum 'input' ro befahmim va 'event.target.value' mitunim value marbut be input ro begirim
      */

    // switch (e.target.name) {
    //   case "username":
    //     /*
    //       alan mibinim ke ba gozashtan meghdar 'value input' dakhel 'useState' tamame 'object' pak mishe va faghat mizane 'user' gharar migire
    //       baraye in ke baghie maghadir 'object' pak nashe bayad ye 'copy' az tamame chizi ke dakhel moteghayer darim ro dakhel 'object' bezarim
    //       va faghat oun mizane ke mikhaim ro taghyir bedim.
    //       dar inja ma dakhel moteghayer 'useState' miaim az 'arrow function' estefade mikonim. dalil asli ine ke betunim meghdar ghabli
    //       dakhel vorudi migirim ke mishe azash baraye 'copy' gereftan estefade kard.
    //       hala dakhel 'function' miaim meghdar ghabli dakhel 'object' moteghayer 'useState' ro 'copy' mikonim daghighan dakhel 'object' va
    //       amalan mohtaviat dakhel 'object' moteghayer ro 'copy' mikonim dakhel ye 'object' dige va oun meghdari ke mikhaim ro az oun ja
    //       taghyir midim.
    //       dalil in ke dar 'arrow function' '() => ()' az parantez estefade kardim ine ke mikhaim harchi dakhelesh hast vasamun 'return' beshe
    //       va dige niazi be neveshtan 'return' nist.
    //     */
    //     setCreateArticle((prevStateData) => ({
    //       // inja tamame mohtaviat 'object' ke dakhel 'useState' dashtim dakhel in 'object' rikhte mishe mesl ye 'copy' ke behesh 'sprat' migan.
    //       ...prevStateData,
    //       // dar inja ham faghat mizan 'username' darun 'object' ro avaz mikonim va meghdar jadid ro gharar midim.
    //       username: event.target.value
    //     }))
    //     break;

    //   case "password":
    //     setCreateArticle((prevStateData) => ({
    //       // inja tamame mohtaviat 'object' ke dakhel 'useState' dashtim dakhel in 'object' rikhte mishe mesl ye 'copy' ke behesh 'sprat' migan.
    //       ...prevStateData,
    //       // dar inja ham faghat mizan 'password' darun 'object' ro avaz mikonim va meghdar jadid ro gharar midim.
    //       password: event.target.value
    //     }))
    //     break;
    //   }

    /* 
      ma mitunim be jaye in ke az 'switch, case' estefade konim mitunim ba estefade az 'name' ke be input ha dadim be shart in ke 'name'
      bayad daghighan barabar mizan avalie hamun dakhel 'object' avalie 'useState' bashe.
      alan mitunim be rahati az 'event.target.name' estefade konim va meghdar dehi konim.
    */
    setUser((prevStateData) => ({
      // inja tamame mohtaviat 'object' ke dakhel 'useState' dashtim dakhel in 'object' rikhte mishe mesl ye 'copy' ke behesh 'sprat' migan.
      ...prevStateData,
      // dar inja ham faghat mizan 'name' darun 'object' ro avaz mikonim va meghdar jadid ro gharar midim.
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <Container>
        <input
          onChange={handelChangeInput}
          type="text"
          placeholder="نام کاربری"
          name="username"
        />
        <input
          onChange={handelChangeInput}
          type="password"
          placeholder="رمز عبور"
          name="password"
        />
        <Button
          onClick={() => handelLogin(user.username, user.password)}
          className=""
          variant="success"
        >
          ورود
        </Button>
      </Container>
    </div>
  );
}

export default Login;
