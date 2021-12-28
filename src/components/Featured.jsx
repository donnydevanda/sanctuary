import Image from "./parts/Image";

export default function Featured(props) {
  const renderItem = () => {
    let arr = [];
    for (let product of props.products) {
      arr.push(
        <div className="basis-1/4 mx-auto" key={`most-picked-${product.id}`}>
          <Image
            url={`https://sanctuary-server.herokuapp.com/${product.image_url}`}
            name={product.name}
          />
        </div>
      );
    }
    return arr;
  };

  return (
    <div className="container mx-auto mt-12 2xl:-mt-8">
      <div className="w-4/5 mx-auto 2xl:w-full">
        <img
          src="./square-featured.svg"
          alt=""
          className="invisible 2xl:visible 2xl:w-1/2"
        />
        <h1 className="text-5xl text-green-800 font-bold font-serif -mt-24 md:-mt-80 2xl:-mt-96 2xl:px-12">
          Featured Drinks
        </h1>
        <p className="text-green-800 my-4 2xl:px-12 2xl:mt-7">
          They always ask us about this.
        </p>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:mt-8">
        {renderItem()}
        {/* <div className="basis-1/4 mx-auto">
          <Image url="./img-drink-1.jpg" name="Kopi A" />
        </div>
        <div className="basis-1/4 mx-auto">
          <Image url="./img-drink-2.jpg" name="Kopi B" />
        </div>
        <div className="basis-1/4 mx-auto">
          <Image url="./img-drink-3.jpg" name="Kopi C" />
        </div>
        <div className="basis-1/4 mx-auto">
          <Image url="./img-drink-4.jpg" name="Kopi D" />
        </div> */}
      </div>
      <div className="flex justify-end -mt-64">
        <img
          src="./circle-featured.svg"
          alt=""
          className="invisible md:visible md:w-1/2 md:px-48"
        />
      </div>
    </div>
  );
}
