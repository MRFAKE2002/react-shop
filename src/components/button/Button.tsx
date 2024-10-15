// libraries
import { ComponentPropsWithRef } from "react";

/*
  dar inja ma variant ro be onvan vorudi migirim va baraye type az 'union' estefade mikonim chon mikhaim shart bezarim ke baraye har kodum che etefaghi biofte.
*/
type TVariant = "primary" | "secondary" | "danger" | "warning" | "success";

/*
  ma baraye inke betunim baraye ferestadan vorudi be onvan 'props' be tamam element haye 'button' mesl 'id, onClick, type, ...' dastresi dashte bashim az 
  'ComponentPropsWitRef' estefade mikonim va migim element haye tag 'button' ro mikhaim ke be onvan type bedim be props.
*/
type TButton = ComponentPropsWithRef<"button"> & {
  variant: TVariant;
};

/*
  dar inja ma miaim aval children ro be onvan vorudi props migirim va be onvan matn be 'button' midim. hala ma dar props bayad biaim baraye har attribute ke mikhaim
  be 'button' befrestim mesle 'id, onClick, type, ...' bayad ounja be onvan props befrestim va inja bayad har kodum ro be onvan vorudi begirim va dakhel tag 'button'
  gharar bedim ke in code ro ziad mikone va ma majbur mishi baraye har kodum in kar ro tekrar konim.
  hala baraye oun das az vorudi ha ke az props migirim va lazem nist inja taghyir bedim va faghat gharare begirim va be tag 'button' ezafe konim miaim migim 
  tamame oun vorudi hayi ke be onvan props ferestadi ro begir va bezaresh dakhel 'rest' ke in kar amalan ba code '...rest' anjam shode; va hala migim bia ounayi ke 
  dakhel 'rest' hastan ro be onvan attribute bede be tag 'button'.
*/
function Button({ children, variant, ...rest }: TButton) {
  /* 
      console.log(variant); "danger"
      
      console.log(checkVariant(variant)); "{backgroundColor: 'red', color: 'white'}"
      
    */
  return (
    <button {...rest} style={{ ...checkVariant(variant) }}>
      {/* 
        ma inja az children estefade kardim ta matn dakhel 'button' ro betunim benevisim chon shayad az in component dar jahaye mokhtalef estefade konim.
      */}
      {children}
    </button>
  );
}

export default Button;

/*
  ma hala mikhaim function besazim ke biad baraye vorudi 'variant' shart bezare ke baste be meghdaresh kari ro bokone.
  ma baraye har kodum az halat miaim 'style' moshakhas mikonim hala bayad biaim pasokh ro ke 'return' mikonim mohtaviat ro dakhel attribute 'style' bezarim.
  ba inkar bar asas har vorudi rang 'button' va text ro moshakhas mikonim.
*/
function checkVariant(variant: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "blue", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "black" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  }
}
