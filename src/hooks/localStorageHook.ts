// libraries
import { useState, useEffect } from "react";

/* 
  dakhel in 'custom hook' mikhaim data ya moteghayer hayi mesl 'cartItems' ro dakhel 'localStorage' gharar bedim.

  inja ma yek 'function' misazim ke amalan miaim 'key va initialValue' ro az vorudi migirim va dar 'localStorage' gharar midim.
  
  chon ma gharar ke in 'function ya custom hook' ro chand ja estefade konim nemidunim gharar 'initialValue' che 'type' dashte bashe;
  baraye hamin miaim az 'general type' estefade mikonim va amalan type ro ham zaman estefade az in 'hook' tarif mikonim;
  yani alan meghdar 'type' ro mizarim ye chizi mesl 'T' ke neshun 'type' bashe va zamani ke mikhaim az in 'custom hook' estefade konim
  va data dakhelesh be onvan 'initialValue' befrestim 'type' in 'initialValue' ro ham moshakhas mikonim.
*/
export function useLocalStorage<T>(key: string, initialValue: T) {
  /*
    hala in function gharar chetori kar kone:
    
    inja miaim ye 'state' misazim ke inja miaim migim age dakhel 'localStorage' oun 'key' ke gereftim bud ke bia hamun meghdar ro 
    begir bezaresh dakhel oun 'state' be onvan 'value' ke age 'refresh' shod biad hamun meghdar ke bud hamun ro bezare bashe.
    hala age oun 'key' dakhel 'localStorage' nabud bia dakhel 'state' oun meghdar 'initialValue' ro gharar bede.

    dar akhar ham miaim dakhel 'localStorage' oun 'key va value' ro 'set' mikonim.
  */

  const [value, setValue] = useState<T>(() => {
    // inja miaim migim oun 'key' ke az vorudi gereftim dakhel 'localStorage' hast ya na; ke ya oun 'string' mide ya 'null'.
    let localStorageValue = localStorage.getItem(key);

    if (localStorageValue != null) {
      // inja migim age meghdar 'value' oun 'key' dakhel 'localStorage' meghdar 'null' nabud bia hamun meghdar ro dakhel 'state' bezaresh.
      return JSON.parse(localStorageValue);
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    /* 
    inja ma mikhaim dakhel 'localStorage' biaim 'key' va oun 'value' ro gharar bedim; har vaghti ham meghdar 'value' taghyir kone 
    meghdar dobare dakhel 'localStorage' gharar migire.
    */

    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // inja miaim oun meghdar 'state' return mikonim ta vaghti 'function call' kardim betunim be maghadir 'value' dakhel 'localStorage' dashte bashim.
  return [value, setValue] as [typeof value, typeof setValue];
}
