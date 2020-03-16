import React from "react";
import "./styles.css";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import NewsContextProvider from "./components/NewsList/NewsContextProvider";

export default function App() {
  return (
    <div className="news-app">
      <NewsContextProvider>
        <Header />
        <NewsList />
      </NewsContextProvider>
    </div>
  );
}
