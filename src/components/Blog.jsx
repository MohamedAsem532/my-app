import React, { useEffect, useState } from "react";
import axios from "axios";
import Blogsingle from "./Blogsingle";
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
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
      <Container>
      <Row>
                {data.map((item) => 

        <Col md ={4}>
      
        <Blogsingle key={item.id} title ={item.title} />
      </Col>
      )}
      </Row>
      </Container>
      </div>
    </>

    
  );
};

export default Blog;
