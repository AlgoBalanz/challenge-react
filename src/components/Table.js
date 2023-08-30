import React from "react";

const Table = ({ data }) => {
    return (
        <div className="table">
            {data.map((comment, index) => {
                return (
                    <div className="row" key={index}>
                        <div>{comment.postId}</div>
                        <div>{comment.id}</div>
                        <div>{comment.name}</div>
                        <div>{comment.email}</div>
                        <div>{comment.body}</div>
                    </div>
                );
            })}
            {data.length > 0 ? "" : "No Data"}
        </div>
    );
};

export default Table;
