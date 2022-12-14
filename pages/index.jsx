import React, { useState, useEffect } from "react";
import Head from "next/head";

import NewsGrid from "../components/NewsGrid";
import CategoryFilter from "../components/Filter/CategoryFilter";
import ArticleOfTheDay from "../components/ArticleOfTheDay";
import Sidebar from "../components/Navigation/Sidebar";

export default function Home() {
  const [items, setitems] = useState([]);
  const [latestItems, setLatestItems] = useState([]);
  const [category, setCategory] = useState("general");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?apiKey=37a705adad214fcab2c788322cb1c63f&pageSize=100" +
        ("&language=" + language) +
        ("&category=" + category)
    )
      .then((res) => res.json())
      .then((data) => setitems(data.articles));
  });

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?apiKey=37a705adad214fcab2c788322cb1c63f&category=general"
    )
      .then((res) => res.json())
      .then((data) => setLatestItems(data.articles));
  });

  return (
    <div className="container px-4">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <div className="w-32">
          <Sidebar />
        </div>
        <div className="w-full lg:px-4 lg:w-5/6 py-8 lg:py-14">
          <main>
            <ArticleOfTheDay latestItems={latestItems} />
            <div className="mt-4 md:mt-0 lg:mt-4">
              <CategoryFilter category={category} setCategory={setCategory} />
              <NewsGrid items={items} />
            </div>
          </main>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}
