import React from "react";
import axios from "axios";
// import Detail from "./Detail";

class Pokemone extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            image: "",
            id: 0
        }
    }
    componentDidMount() {
        axios.get(this.props.item.url)

            .then((response2) => {
                this.setState({
                    data:response2.data,
                    image: response2.data.sprites.other.dream_world.front_default,
                    id:response2.data.id
                })
            })
            .catch((err) => {
                // handle error
                console.log(err);
            })
    }
    render() {
        return (
            <>
              
                <div className="pokemon shadow-sm p-3 bg-body rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                <p>Id: {this.state.id} </p>
                    <img src={this.state.image} /><br/>
                    <button  type="button" className="btn btn-primary" onClick={()=>this.props.handleClick(this.state.data)}>
                        {this.props.item.name}
                    </button>
                    {/* <p>{this.props.item.name}</p> */}
                </div>
            </>
        )
    }
}
export default Pokemone