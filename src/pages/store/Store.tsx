// libraries
import { useEffect, useState } from "react";

// components
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";

// API call function
import { getProductsAPI } from "../../services/api";

// types
import { IProductsAPI } from "../../types/server";

function Store() {
  /* 
    in yani ma 'state' darim ke list type 'IProductsAPI[]' hala in yani list ke tush majmueyi az object ke type 'IProductsAPI' 
    darim ke in 'IProductsAPI' khodesh object va tush type data product.
  */
  const [productsData, setProductsData] = useState<IProductsAPI[]>([]);

  /*
    ma inja miaim az 'useEffect' estefade mikonim ta az charkhe zendegi 'lifecycle React' estefade konim va API call anjam bedim.
    
    alan 'getProductsAPI' yek 'async function' ast ke yani yek 'promise' barmigardune yani ta zamani ke data kamel daryaft nashe
    'return' nemikone pas ma miaim az 'then' estefade mikonim.

    dar asl 'then' miad az natije nahayi 'zamani ke promise takmil shod' estefade mikone; amalan montazer mimune ta API call kamel 
    beshe va data 'return' shode ro dar 'productsAPI' barmigardune va function dakhelesh ro ejra mikone.


  */

  useEffect(() => {
    getProductsAPI().then((productsAPI) => {
      /*
        console.log(productsAPI);
        "
          Array(5) [
            0: {id: '1', name: 'محصول اول', price: 1000000, description: 'این یک متن تستی برای نشان دادن اینکه این یک محصول … این یک محصول است که در یک کامپوننت جدا قرار داره', imageUrl: 'https://static.vecteezy.com/system/resources/previ…in-supermarket-illustration-for-banner-vector.jpg'}
            1: {id: '2', name: 'محصول دوم', price: 1000000, description: 'این یک متن تستی برای نشان دادن اینکه این یک محصول … این یک محصول است که در یک کامپوننت جدا قرار داره', imageUrl: 'https://static.vecteezy.com/system/resources/previ…in-supermarket-illustration-for-banner-vector.jpg'}
            2: {id: '3', name: 'محصول سوم', price: 1000000, description: 'این یک متن تستی برای نشان دادن اینکه این یک محصول … این یک محصول است که در یک کامپوننت جدا قرار داره', imageUrl: 'https://static.vecteezy.com/system/resources/previ…in-supermarket-illustration-for-banner-vector.jpg'}
            3: {id: '4', name: 'محصول چهارم', price: 1000000, description: 'این یک متن تستی برای نشان دادن اینکه این یک محصول … این یک محصول است که در یک کامپوننت جدا قرار داره', imageUrl: 'https://static.vecteezy.com/system/resources/previ…in-supermarket-illustration-for-banner-vector.jpg'}
            4: {id: '5', name: 'محصول پنجم', price: 1000000, description: 'این یک متن تستی برای نشان دادن اینکه این یک محصول … این یک محصول است که در یک کامپوننت جدا قرار داره', imageUrl: 'https://static.vecteezy.com/system/resources/previ…in-supermarket-illustration-for-banner-vector.jpg'}
          ]
        "
      */

      /*
        vaghti data az API call bar migardan dar inja data ro be 'productsAPI' ekhtesas mide va badesh 'function setProductsData' 
        farakhani mikone ke marbut be yek 'state' ast; in function data ro dakhel 'state productsData' gharar mide va component ro 
        'rerender' mikone ta data namayesh bede. 
      */
      setProductsData(productsAPI);
    });
  }, []);

  return (
    <Container>
      <h1 className="text-xl text-right my-4">محصولات</h1>
      <div className="grid grid-cols-4 gap-5 mt-3">
        {/* 
          ma az 'map' dar React estefade mikonim ta betunim 'araye ya list az data' ro be yek 'araye ya list az anasor JSX' tabdil konim
          va har onsor ro dar 'rabet karbari ya UI' namayesh bedim.

          dar inja 'araye ya list az data' dakhel 'state productsData' hast; har product be onvan 'object' dar in list vojud dare va ma 
          bayad har product ro dar ghaleb 'ProductItem component' render konim. 

          hala dalayel estefade az function 'map':

          1- tabdil araye be anasor JSX: 
            function 'map' be ma in ejaze ro mide ke har 'object' az 'state productsData' ro be yek onsor JSX tabdil mikone; dar in kar
            har product be yek 'Link az react-router-dom' va yek 'ProductItem component' tabdil mishe.
          
          2- modiriat taghyirat va React: 
            vaghti az function 'map' estefade mikonim va be har onsor JSX 'key' ekhtesas bedim React mitune be surat behine motevajeh 
            beshe ke che taghyirat dar araye 'productsData' etefagh oftade va faghat oun anasor ro ke taghyir kardan 'rerender' mikone
            ke render sari tar va behine tar mishe.

          hala nokte mohem inja ine ke aslan ma chera bejaye 'map' az 'for' ya 'foreach' estefade nemikonim?

          vaghti az 'map' estefade mikonim miad baraye har 'item ya object' dar 'araye ya list' yek 'onsor ya tag JSX' tabdil mikone.
          hala miad in tag ro 'return' mikone. ama dar asl miad baraye har 'tag JSX' ke misaze dakhel yek 'araye ya list' jadidi ke
          misaze gharar mide ke shamel majmueyi az 'tag JSX' hast va React ba didan mohtaviat in 'araye' jadid rerender anjam mide.

          ama 'foreach' baraye ejra yek 'item' dar function estefade mishe va hich meghdari 'return' nemikone. baraye hamin az 'foreach'
          baraye 'render' list 'tag JSX' monaseb nist chon majburim yek araye be surat dasti besazim va tag JSX ezafe konim.

          ama 'for' ye halghe control hast ke be surat mostaghim meghdari ro 'return' nemikone.

        */}
        {productsData.map((product) => (
          <Link to={`/product/${product.id}`}>
            <ProductItem {...product} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Store;
