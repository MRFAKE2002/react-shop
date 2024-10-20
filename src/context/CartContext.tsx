// libraries
import React, { createContext, useContext, useState } from "react";

interface ICartContextProvider {
  children: React.ReactNode;
}

interface ICartItem {
  id: number;
  quantity: number;
}

interface ICartContext {
  cartItems: ICartItem[];
  handleIncreaseProductIntoCart: (id: number) => void;
  handleDecreaseProductIntoCart: (id: number) => void;
  getProductQuantityFromCart: (id: number) => number;
  removeProductFromCart: (id: number) => void;
  cartTotalQuantity: number;
}

/*
  inja ma mikhaim function vase 'context' besazim ke 'App.tsx' ro sholugh nakonim.

  hala miaim ye 'context' misazim vase 'cart' ke betunim 'list products' ro ke dakhel 'cart' mizarim kol project estefade konim.

  bayad 'meghdar avalie ya initialize' baraye 'context' besazim; chon darim az 'typescript' estefade mikonim bayad type 'context'
  ro moshakhas konim.
*/

// export const CartContext = createContext<ICartContext>({
//   cartItems: [],
// })

/*
  dar inja ma mitunim bejaye dadan meghdar avalie va type be context biaim begim context ma ye object ke mishe be surat type 
  dade shode darnazar gerefte va injuri code kamtar va tamiztar.
*/

export const CartContext = createContext({} as ICartContext);

// baraye in ke dige 'useContext' ro hamash seda nazanim begim mikhaim az 'CartContext' estefade konim yekbar minevisimesh.
export const useCartContextValues = () => {
  return useContext(CartContext);
};

export function CartContextProvider({ children }: ICartContextProvider) {
  /*
    alan ma miaim 'useState' estefade mikonim ye 'list' dakhelesh gharar midim baraye 'products' va in 'state' ro be onvan 'context' 
    be kol project mifrestim va in kar ro ba gharar dadan 'state' be onvan 'value' dakhel 'context Provider' anjam midim.

    az ounjayi ke back-end kar 'data product' ro khodesh dare pas faghat ma bayad 'id' va 'quantity' product ro behesh bedim 
    ke begim 'che product vaa chand ta' dar cart hast.
  */
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  /*
    khob residim ghul akhar :
    alan mikhaim function besazim baraye 'cart'; in function 3 ta senario dare baraye har product:

    1: baraye 'avalin bare' ke mikhaim 'product' dar 'cart' ezafe konim pas bayad 'id' oun 'product' ro begirim va agar dakhel 'cart' nabud ya amalan 'null ya undefine'
    bargardund biaim begim 'id product va quantity oun product' ro dar 'stat cartItems' ezafe kon.

    2: agar 'product' dakhel 'cart' bud bayad biaim dakhel 'list state cartItems' begardim biaim 'id product' bedim age bud be 'quantity' ezafe konim.

    3: ma dakhel 'list state cartItems' momkene chand ta 'product' dashte bashim bayad begim ke oun 'product' ke bahash kari nadarim hamuntori bargardune.

    ma alan miaim 'id' ke dakhel 'SingleProduct page' az 'useParams' gereftim ro be 'function' midim. hala inja 'function setCartItems' seda mizanim chon hame senario ha
    va data dakhel in 'list' gharar dare. 

  */

  const handleIncreaseProductIntoCart = (id: number) => {
    setCartItems((currentItems) => {
      /*
        ma inja mikhaim dakhel 'list state cartItems' ke meghdar ghablish dakhel 'currentItems' gozashtim 'search' bezanim ta bebinim oun 'product' ke 'click' kardim 
        dakhel 'cart' hast ya na. 
        agar nabashe 'null ya undefined' bar migardune.
      */
      let selectedProduct = currentItems.find((item) => item.id === id);
      if (selectedProduct == null) {
        // inja migim agar 'product' dakhel 'cart' nabud biad ye 'list' besaze mohtaviat ghabli ke 'object products' budan ro bezare va entehash be onvan product jadid ezafe kone.
        return [...currentItems, { id: id, quantity: 1 }];
      } else {
        // agar 'product' entekhabi dakhel 'cart' bud miaim 'map' mizanim dakhel 'cart' ke har 'object product' ro behemun bede.
        return currentItems.map((product) => {
          // age 'product' peida shod ouni bud ke entekhab kardim bia yedune be quantity ezafe kon
          if (product.id == id) {
            return {...product, quantity: product.quantity + 1};
            // age nabud hamun 'object product' ro return kon dobare be cart engar ke dast nakhorde va taghyir nakarde.
          } else {
            return product;
          }
        });
      }
    });
  };


  /*
    khob residim ghul akhar 2:
    alan mikhaim function besazim baraye 'cart'; in function 3 ta senario dare baraye har product:

    1: baraye 'akharin bar' ke mikhaim 'product' ro az 'cart' kam konim pas bayad 'id' oun 'product' ro begirim va agar dakhel 'cart' faghat 1 dune bud biaim oun
    'object' ro az 'list state cartItems' pak konim.

    2: agar 'product' dakhel 'cart' bud bayad biaim dakhel 'list state cartItems' begardim biaim 'id product' bedim age bud az 'quantity' kam konim.

    3: ma dakhel 'list state cartItems' momkene chand ta 'product' dashte bashim bayad begim ke oun 'product' ke bahash kari nadarim hamuntori bargardune.

    ma alan miaim 'id' ke dakhel 'SingleProduct page' az 'useParams' gereftim ro be 'function' midim. hala inja 'function setCartItems' seda mizanim chon hame senario ha
    va data dakhel in 'list' gharar dare.
  */

  const handleDecreaseProductIntoCart = (id: number) => {
    setCartItems((currentItems) => {
      /*
        ma inja mikhaim dakhel 'list state cartItems' ke meghdar ghablish dakhel 'currentItems' gozashtim 'search' bezanim ta bebinim oun 'product' ke 'click' kardim 
        dakhel 'cart' hast ya na. 
        agar nabashe 'null ya undefined' bar migardune.
        ama inja hatman hast chon mikhaim kamesh konim.
      */
      let selectedProduct = currentItems.find((item) => item.id === id);
      if (selectedProduct?.quantity == 1) {
        // inja migim 'product' dakhel 'cart' hast biad ye 'list' besaze 'object' hayi ke 'id product' ba id oun 'selected product' motafavete dakhelesh bezare.
        return cartItems.filter(item => item.id !== id);
      } else {
        // agar 'product' entekhabi dakhel 'cart' bud miaim 'map' mizanim dakhel 'cart' ke har 'object product' ro behemun bede.
        return currentItems.map((product) => {
          // age 'product' peida shod ouni bud ke entekhab kardim bia yedune az quantity kam kon.
          if (product.id == id) {
            return {...product, quantity: product.quantity - 1};
            // age nabud hamun 'object product' ro return kon dobare be cart engar ke dast nakhorde va taghyir nakarde.
          } else {
            return product;
          }
        });
      }
    });
  };


  /*
    alan mikhaim az 'arrow function' estefade konim va 'quantity' har 'product' ro az 'list state cartItems' begirim va namayesh bedim
  */
  const getProductQuantityFromCart = (id:number) => {
    /* 
      inja migim az dakhel 'list state cartItems' oun object product ro biar ke id product hamin id ke ferestade shode; hala 'find' age bashe miad 'object oun product' 
      ro barmigardune ya age nabashe 'undefined' barmigardune;

      ma miaim migim age oun product bud ke bia az object ke barmigardune 'quantity' ro begu va 'return' kon ke mishe type 'number' dar khoruji.
      age ham oun product ke 'id' ro ferestade nabud dakhel 'list state cartItems' bia kolan 0 'return' kon ke 'quantity oun product' ro '0' bezanim; ke mishe type 'number' dar khoruji
    */
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  /*
    dar inja ma mikhaim oun 'product' ro kamel az 'list state cartItems' pak konim. 
    miaim dakhel 'state' filter mizanim migim hame 'object product' bashe be joz oun 'product' ke 'id' ro mifrestim
  */
  const removeProductFromCart = (id: number) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id))
  }

  /*
    inja ma mikhaim biaim 'tedad kol product' dakhel 'list state cartItems' ro be dast biarim va dar navbar bezarim.

    alan az 'reduce' estefade mikonim; in method karesh jamavarie maghadir mokhtalef dar yek araye va tabdil oun be yek meghdar vahed ast. 2 attribute migire:
    
    1: ye arrow function ke baraye har 'object product' dat 'list' ejra mishe; hala in function 2 ta attribute migire;
    1-1: oun meghdar vahed ke gharar majmue 'quantity product' ro dakhelesh mizarim.
    1-2: har 'object product' ke dakhel 'list' hast ro dar in meghdar mizarim.

    2: ye 'meghdar avalie' migire ke baraye oun meghdar vahed 'attribute aval arrow function' gharar midim.
  */
  const cartTotalQuantity = cartItems.reduce((totalQuantity, productObject) => totalQuantity + productObject.quantity, 0)

  return (
    <CartContext.Provider value={{ cartItems, handleIncreaseProductIntoCart, handleDecreaseProductIntoCart, getProductQuantityFromCart, removeProductFromCart, cartTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
