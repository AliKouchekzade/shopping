const Product = ({ product }) => {
  return (
    <div className="w-96 bg-cyan-50 rounded-lg px-10 py-5 flex flex-col gap-y-5">
      <header>
        <h2 className="font-semibold">{product.name}</h2>
      </header>
      <main className="flex flex-col items-center">
        <img
          className="w-full h-44 object-cover"
          src={product.image}
          alt={product.name}
        />
      </main>
      <footer className="flex justify-between">
        <span className="font-bold text-xl">$ {product.price}</span>
        <button className="bg-cyan-700 text-white px-2.5 py-1.5 rounded">add to cart</button>
      </footer>
    </div>
  );
};

export default Product;
