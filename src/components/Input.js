import React from "react";

const Input = ({ labelName, input, setInput, name }) => {
    console.log(name);

    return (
        <div className="searcher">
            <label>{labelName}</label>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
};

export default Input;
