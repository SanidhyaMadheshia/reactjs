import data from "../../main.jsx";

function ComponentA() {
    // const {name } = Data.useContext(Data);
    return (
        <div>
            <data.Data.Consumer>
                {({ name }) => <div>{name}</div>}
                
            </data.Data.Consumer>
            <data.Data1.Consumer>
                {({ name1 }) => <div>{name1}</div>}
            </data.Data1.Consumer>
            {/* {name } */}
            ComponentA
        </div>
    )
}

export default ComponentA;
