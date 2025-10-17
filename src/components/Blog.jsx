import React, { useEffect, useState } from "react";
import axios from "axios";
const Blog = () => {
    
  const [num, setNum] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <button onClick={() => setNum("New Data")}>Click</button>
      <h1>{num}</h1>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            {item.id}: {item.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
