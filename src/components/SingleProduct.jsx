import { useParams } from "react-router-dom";
import { useFatch } from "../hooks/useFatch";
import Contact from "../pages/Contact";
function SingleProduct() {
  let { id } = useParams();
  let { data, error, isPending } = useFatch(
    "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books" + id
  );
  console.log(data);
  return (
    <>
      {data && (
        <div className=" mx-auto px-16 mt-10">
          <ul className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
            {data.images.map((img) => {
              return (
                <li key={Math.random()} className="carousel-item ">
                  <img
                    src={img}
                    className="rounded-box max-h-60 lg:max-h-96 h-full object-contain"
                  />
                </li>
              );
            })}
          </ul>
          <div className=" mt-5 font-bold flex  flex-col ">
            <h1 className=" text-3xl">Product:</h1>
            <h3 className="">category: {data.author_id}</h3>
            <p>Description: {data.pages}</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="  accent-content text-2xl">Price:</p>
            <textarea
              className="textarea w-60  "
              placeholder="comments"
            ></textarea>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
