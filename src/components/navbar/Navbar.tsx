// libraries
import { Link } from "react-router-dom";

// components
import Container from "../container/Container";

function Navbar() {
  return (
    /* 
      dar inja baraye inke betunim link ha va button ke sakhtim kenare ham gharar bedim bayad az 'flex' estefade konim. 
      baraye inke button va link ha fasele dashte bashan az ham bayad az 'justify-between' estefade konim. 
      baraye inke dar samt chap va link ha dar samt rast bashan bayad az 'flex-row-reverse' estefade konim. 
      baraye inke ham button va ham link ha vasat bian az bala va payin bayad az 'items-center' estefade konim.
    */
    <div className="h-20 border-b-2 flex items-center">
      {/* 
        baraye gozashtan fasele az chap va rast az component container estefade mikonim va be onvan children pas midim.
        chon ma alan ba gozoshtan component oun class tailwind ke dar div bala bud emal nemishe pas bayad biaim yek div dige 
        bezarim ke betunim behesh style bedim.
        ama chon oumadim dakhel component 'Container' az 'mx-auto' estefade kardim pas class 'items-center' emal nemishe pas bayad
        biaim be tag pedaresh in class ro bedim yani tag ghabl az component 'container'.
      */}
      <Container>
        <div className="flex justify-between flex-row-reverse ">
          {/*
            dar inja baraye inke link hayi ke sakhtim zire ham nabashe va kenar ham bashe pas bayad az 'flex' estefade konim.
            va baraye inke jaye in link ha bar aks neshun dade beshe bayad az 'flex-row-reverse' estefade konim.
          */}
          <ul className="flex flex-row-reverse">
            <li className="mx-4">
              {/*
                dar inja baraye sakht link ya safhe bandi dar react bayad az tag 'Link' estefade konim ke dar inja amalan baraye ma
                miad tag '<a href=""></a>' misaze va dar tag 'a' ma href darim baraye vared kardan url ke mikahim berim vali dar
                inja ma az element 'to' estefade mikonim va daghighan hamun url ke be onvan 'path' dar tag 'Route' dar App.tsx
                dadim bayad dade behse
              */}
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>
          <div>
            <Link to="/cart">
              <button>سبد خرید</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
