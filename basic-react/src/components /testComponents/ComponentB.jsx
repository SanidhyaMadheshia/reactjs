import { useContext } from "react";
import data from "../../main.jsx";
function ComponentB() {

    const dataData= useContext(data.Data);
    const dataData1 = useContext(data.Data1);
    return (
        <div>
            ComponentBajsdb
            <div>
                
            </div>
            {dataData.name}
            {dataData1.name1}
        </div>
    )
}

export default ComponentB;
