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

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
