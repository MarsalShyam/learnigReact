import React, { useState, useEffect } from "react";

const CardDisplay = () => {
    // State to hold API data
    const [data, setData] = useState([]);

    //State for search input
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch data from API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((result) => setData(result));
    }, []);

    //Filter data based on search term
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Display data as cards
    return (
        <>
        <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          width: "100%",
          maxWidth: "300px",
        }}
      />
        //display card
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {filteredData.map((item) => (
                <div
                    key={item.id}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "1rem",
                        width: "200px",
                    }}
                >
                    <p>userId: {item.userId}</p>
                    <h3>{item.title}</h3>
                    <p>Body: {item.body}</p>

                </div>
            ))}
        </div>
        </>
        
    );
};

export default CardDisplay;
