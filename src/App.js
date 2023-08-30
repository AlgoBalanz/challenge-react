import { useState } from "react";

import "./App.css";
import Table from "./components/Table";
import Input from "./components/Input";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [comments, setComments] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const getFilterComments = () => {
        return comments;
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
