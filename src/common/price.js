const Price = ({ item, qnt = 1 }) => {
  return (
    <div className="flex items-center">
      <span className="font-bold text-xl">$ {item.offPrice * qnt}</span>
      {item.price !== item.offPrice && (
        <>
          <span className="relative text-sm bottom-4 right-2 bg-red-500 text-white px-1.5 rounded-lg">
            %{item.discount}
          </span>
          <span className="font-bold text-md text-gray-500 line-through decoration-2 relative right-3">
            {item.price * qnt}
          </span>
        </>
      )}
    </div>
  );
};

export default Price;
