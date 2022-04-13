import logo from "../Assets/mask.png";


function Person(params) {

    const Pallets= [{
        id: 0,
        label: "MASK",
        color: "#1ac0f7"
    }, {
        id: 1,
        label: "NO_MASK",
        color: "red"
    },
    {
        id: 2,
        label: "MOUTH",
        color: "green"
    },
    {
        id: 3,
        label: "DEFAULT",
        color: "yellow"
    }
]

function getPallet(){
    return Pallets.filter(p => p.label === params.label)[0].color;
}

    return (
        <div className ="Person" style={{backgroundColor:getPallet()}}>
            <button onClick={()=>console.log(params)}>
                <img src ={params.img? params.img:logo} alt = "logo" ></img>
            </button>
        </div>
    );
}
export default Person;