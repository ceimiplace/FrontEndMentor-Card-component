import mobilePicture from "../product-preview-card-component-main/images/image-product-mobile.jpg";
import desktopImage from "../product-preview-card-component-main/images/image-product-desktop.jpg";
function App() {
  return (
    <div className="card-container bg-white rounded-md overflow-hidden sm:flex ">
      <picture className="w-60">
        <source
          srcSet={desktopImage}
          media="(min-width: 640px)"
          className="w-60"
        />
        <img className="w-60" src={mobilePicture} alt="photo of a product" />
      </picture>

      <div className="content-container p-4 w-60 ">
        <TypoCategory text="P E R F U ME" />
        <TypoTitle text="Gabrielle Essence Eau de Parfum" />
        <TypoDescription
          text=" A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL."
        />
        <Prices newPrice={"$149.99"} oldPrice={"$169.99"} />
        <Button text={"Add to Cart"} icon={"cart-shopping"} />
      </div>
    </div>
  );
}

function Prices({ newPrice, oldPrice }) {
  return (
    <div className="my-2">
      <span className="text-green-700 text-2xl font-medium mr-2">
        {newPrice}
      </span>
      <span className="text-stone-400 text-xs line-through">{oldPrice}</span>
    </div>
  );
}
function Button({ icon, text }) {
  return (
    <a
      href="#"
      className="block text-center text-sm bg-emerald-600 text-white w-full rounded-md p-2"
    >
      <i className={`fa-solid fa-${icon}`}></i>

      <span className="ml-2">{text}</span>
    </a>
  );
}

function TypoCategory({ text }) {
  return <div className={`text-sm text-stone-400  my-2`}>{text}</div>;
}
function TypoTitle({ text }) {
  return <div className={`text-2xl font-bold my-2`}>{text}</div>;
}
function TypoDescription({ text }) {
  return <div className="text-stone-500">{text}</div>;
}
export default App;
