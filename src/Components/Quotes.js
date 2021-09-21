import React from "react";

export default function Quotes(props) {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  {props.character}
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                  {props.animeName}
                </h1>
                <p className="leading-relaxed mb-3">
                  {props.quotes}
                </p>
                <a href="/" className="text-green-400 inline-flex items-center">
                  {" "}
                  <ion-icon
                    className="mx-3"
                    name="share-social-outline"
                  ></ion-icon>{" "}
                  Share
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <ion-icon
                    className="mx-3"
                    name="share-social-outline"
                  ></ion-icon>
                  6
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}