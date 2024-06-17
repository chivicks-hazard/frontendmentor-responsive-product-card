import imageMobile from './assets/image-product-mobile.jpg';
import imageDesktop from './assets/image-product-desktop.jpg';
// import IconCart from './components/IconCart';
import MyLogo from './assets/icon-cart.svg?react';
const App = () => {
  const media = matchMedia('screen and (min-width: 320px) and (max-width: 640px) ');

  return (
    <div className="container mx-auto my-20 md:w-8/12 lg:w-1/2 lg:leading-loose">
      <div className="flex justify-center items-center border border-black rounded-lg">
      <div className="flex flex-col md:flex-row">
      {media.matches ? (
          <img className='md:w-1/2' src={imageMobile} alt="Product Image" />
        ) : (
          <img className='md:w-1/2' src={imageDesktop} alt="Product Image" />
        )}
        <div className='p-4 md:p-10 md:w-1/2'>
          <h3 className='font-Montserrat tracking-widest text-darkGrayishBlue'>PERFUME</h3>
          <h1 className='font-Fraunces font-bold text-4xl'>Gabrielle Essence Eau De Parfum</h1>
          <p className='font-Montserrat mt-2 text-darkGrayishBlue text-lg'>A floral solar and voluptuous interpretation composed by Olivier Poige, 
            Perfumer-Creator for the House of CHANEL</p>
          <div className='flex flex-col mt-6'>
            <div className="flex flex-row space-x-3">
              <h2 className='font-Fraunces font-bold text-4xl text-cream'>$149.99</h2>
              <p className="line-through font-Montserrat text-base align-bottom mt-3">$169.99</p>
            </div>
            <button className='block mt-4 px-4 py-2 bg-cream text-white rounded-lg text-center hover:bg-green-950'><MyLogo className="inline mb-1 mr-2" /> Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App