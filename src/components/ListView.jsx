import React, { useState } from "react";

function ListView () {
    const [ListData, setListData] = useState(["test1", "test2"]);
    const List = ListData.map((data) => {
        return (
            <div key={data}>
                {data}
            </div>
        )
    });
    return (
        <>
        ListView
        {List}
        </>
    );
}

export default ListView;