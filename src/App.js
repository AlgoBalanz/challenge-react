import { useState } from "react";

import "./App.css";
import Table from "./components/Table";
import Input from "./components/Input";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
    const [comments, setComments] = useState([]);
    const [inputValue, setInputValue] = useState("");

    //1.1 - PEGAR A LA API
    const getComments = async () => {
        await fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => res.json())
            .then((anotherRes) => {
                setComments(anotherRes);
            });
    };

    useEffect(() => {
        getComments();
    }, []);

    //1.2 - FILTRAR LOS CAMPOS DE LA TABLA
    const getFilterComments = () => {
        let newFilterComments = comments;
        if (inputValue) {
            newFilterComments = newFilterComments.filter(
                (comment) => comment.name.indexOf(inputValue) !== -1
            );
        }
        return newFilterComments;
    };

    return (
        <div className="content">
            <Header contentValue={"This is a header"} />

            <Input
                labelName={"Search: "}
                input={inputValue}
                setInput={setInputValue}
                name={"Input Search"}
            />

            <Table data={getFilterComments()} />

            <Footer contentValue={"This is a footer"} />
        </div>
    );
}

export default App;
