import logo from "../Assets/mask.png";


function Person(params) {

    const Pallets= [{
        id: 0,
        label: "MASK",
        color: "#79D9D9"
    }, {
        id: 1,
        label: "NO_MASK",
        color: "#1ac0f7"
    },
    {
        id: 2,
        label: "NOSE",
        color: "#034C8C"
    },
    {
        id: 3,
        label: "DEFAULT",
        color: "#D7D7D9"
    }
]

function getPallet(){
    let founder = Pallets.filter(p => p.label === params.label)[0]
    return founder?founder.color:Pallets[3].color;
}

function getIconStyle (){
    return !params.img? {width : "20px"}:{};
}


    return (
        <div className ="Person" style={{backgroundColor:getPallet()}}>
            <button onClick={()=>console.log(params)}>
                <img src ={params.img? params.img:logo} style = {getIconStyle()} alt = "logo" ></img>
                <div className="Cover" style = {{borderColor : getPallet() , border : "40px" }}>{params.label}</div>
                <div className="Lable" style = {{backgroundColor : getPallet()}}>{params.label}</div>
            </button>
        </div>
    );
}
export default Person;