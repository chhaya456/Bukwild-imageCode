import React from "react";
import Header from "./Header";
import Middle from "./Middle";
import ContentData from "../data/content.json";

function Main() {
  console.log(ContentData[0].title);

  // const [item, setItem] = useState(0);

  return (
    <div>
      <Header />
      <Middle />
    </div>
  );
}

export default Main;
