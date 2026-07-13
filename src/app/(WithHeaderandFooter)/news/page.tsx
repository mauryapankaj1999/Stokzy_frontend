"use client";

import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
import React, { useEffect, useState } from "react";

interface NewsItem {
  source?: {
    id?: string | null;
    name?: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsItem[];
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "285d822361ae4c42842fed7fab0dfbe8";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=business&apiKey=${API_KEY}`
        );

        const data: NewsResponse = await res.json();

        console.log(data);

        setNews(data.articles || []);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Headingagebanner pagename="Trading News" />

      <div className="section-container mx-auto py-10">
        {loading ? (
          <div className="grid grid-cols-1 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
            key={item}
            className="h-40 w-full bg-gray-200 animate-pulse rounded-3xl"
            />
          ))}
          </div>
        ) : (
<>


          
          {/* <div className="grid grid-cols-12 gap-8">
            
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {news.slice(0, 6).map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
                >
                  <img
                    src={
                      item.urlToImage ||
                      "https://via.placeholder.com/500x300?text=News"
                    }
                    alt={item.title || "News Image"}
                    className="w-full md:w-80 h-60 object-cover"
                  />

                  <div className="px-6 py-4 flex flex-col flex-1">
                   

                    <h2 className="text-2xl font-bold mt-2 line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 mt-4 line-clamp-4 flex-grow">
                      {item.description ||
                        "No description available for this news article."}
                    </p>

                    <div className="flex items-center justify-between mt-5">
                      <span className="text-sm text-gray-500">
                        {item.source?.name || "Unknown Source"}
                      </span>

                      <a
                        href={item.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary hover:underline"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

        
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-white rounded-2xl shadow-md p-5 sticky top-24">
                <h3 className="text-2xl font-bold border-b pb-3 mb-5">
                  Trending News
                </h3>

                <div className="space-y-5">
                  {news.slice(6, 12).map((item, index) => (
                    <a
                      key={index}
                      href={item.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3 group"
                    >
                      <img
                        src={
                          item.urlToImage ||
                          "https://via.placeholder.com/150x100?text=News"
                        }
                        alt={item.title || "News"}
                        className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                      />

                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition">
                          {item.title}
                        </h4>

                        <p className="text-xs text-gray-500 mt-2">
                          {item.source?.name || "Unknown Source"}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
  {/* Left Side */}
  <div className="col-span-12 lg:col-span-8 space-y-5 lg:space-y-6">
    {news.slice(0, 6).map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
      >
        <img
          src={
            item.urlToImage ||
            "https://via.placeholder.com/500x300?text=News"
          }
          alt={item.title || "News Image"}
          className="w-full md:w-80 h-48 md:h-60 object-cover"
        />

        <div className="px-4 md:px-6 py-4 flex flex-col flex-1">
          {/* <span className="text-primary text-sm font-semibold uppercase">
            Market News
          </span> */}

          <h2 className="text-lg md:text-2xl font-bold mt-2 line-clamp-2">
            {item.title}
          </h2>

          <p className="text-sm md:text-base text-gray-600 mt-3 md:mt-4 line-clamp-3 md:line-clamp-4 flex-grow">
            {item.description ||
              "No description available for this news article."}
          </p>

          <div className="flex items-center justify-between mt-4 md:mt-5">
            <span className="text-xs md:text-sm text-gray-500">
              {item.source?.name || "Unknown Source"}
            </span>

            <a
              href={item.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-semibold text-primary hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Right Side */}
  <div className="col-span-12 lg:col-span-4">
    {/*
      👇 Asli fix: "sticky top-24" -> "lg:sticky lg:top-24"
      Mobile pe ye box normal flow me left content ke NEECHE aayega,
      overlap/chipakna band ho jayega. Sticky effect sirf desktop pe
      (jab dono columns side-by-side hain) chalega.
    */}
    <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 lg:sticky lg:top-24">
      <h3 className="text-xl md:text-2xl font-bold border-b pb-3 mb-4 md:mb-5">
        Trending News
      </h3>

      <div className="space-y-4 md:space-y-5">
        {news.slice(6, 12).map((item, index) => (
          <a
            key={index}
            href={item.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 group"
          >
            <img
              src={
                item.urlToImage ||
                "https://via.placeholder.com/150x100?text=News"
              }
              alt={item.title || "News"}
              className="w-20 h-16 md:w-24 md:h-20 object-cover rounded-lg flex-shrink-0"
            />

            <div className="min-w-0">
              <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition">
                {item.title}
              </h4>

              <p className="text-xs text-gray-500 mt-2">
                {item.source?.name || "Unknown Source"}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
</div>
          </>
        )}
      </div>
    </>
  );
}