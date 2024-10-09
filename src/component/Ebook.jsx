import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

function Ebook() {
  console.table(list);
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-10 item-center justify-center text-center">
            <h1 className="pt-20 text-2xl md:text-4xl">
              We 're Delighted to have you{" "}
              <span className="text-pink-500">Here :)</span>
            </h1>
            <p className="mt-12">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur consequatur placeat quidem possimus, minus sapiente.
              Dignissimos similique cumque illum ad perferendis, doloribus
              voluptatem in inventore, eos commodi asperiores possimus pariatur.
            </p>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"><a href="/">Back</a></button>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
          </div>
      </div>
    </>
  );
}

export default Ebook;
