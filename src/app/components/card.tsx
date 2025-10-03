"use client";

import Link from "next/link";

type CardProps = {

    nextroute:string,
    alternate:string,
    imageSrc:string,
    divText:string,
    btnName :string,
    cardName:string
}

export default function Card({
    nextroute,
    alternate,
    imageSrc,
    divText,
    btnName,
    cardName
}:CardProps) {



  return (
    <div className="w-full flex justify-center items-center py-8">
      <Link
        href={nextroute}
        className="group flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-4xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        {/* Image */}
        <div className="relative w-full h-64 sm:h-72 md:h-auto md:w-1/3 lg:w-1/2 overflow-hidden">
          <img
            src={imageSrc}
            alt={alternate}
            className="object-cover w-full h-74 transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-4 sm:p-6 leading-normal w-full md:w-2/3 lg:w-1/2">
          <h5 className="mb-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-yellow-500">
            {cardName}
          </h5>
          <p className="mb-3 text-gray-700 dark:text-gray-400 text-base sm:text-lg">
           {divText}
          </p>
          <button className="mt-4 w-fit px-4 sm:px-5 py-2 text-sm sm:text-base font-semibold rounded-xl bg-yellow-400 text-gray-900 shadow-md hover:bg-yellow-500 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
           { btnName}
          </button>
        </div>
      </Link>
    </div>
  );
}
