"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getNewsData } from "./api";

export default function Home() {
  const [newsData, setnewsData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsData();
        setnewsData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-bc min-h-screen">
      <div className="flex justify-center">
        <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-10 md:text-4xl">
          News App Built with NextJs, Typescript
        </h2>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-10 md:text-lg">
          News from <span className="text-danger">Bing News Search's API</span>
        </h3>
        {newsData.value?.map((news: any, index: any) => {
          return (
            <Link href={news.url} key={index}>
              <div className="flex items-center text-lg px-10 mb-10 font-light font-raleway h-32 w-3/6 rounded-sm border-2 border-danger text-lightYellow cursor-pointer transition duration-300 hover:border-primary hover:text-danger md:w-80 md:h-40">
                <h3>{news.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
