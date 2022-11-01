import React from "react"
import axios from "axios";
import Pokemone from "./Pokemone";
import Search from "./Search";
import { config } from "./config";
//import ModalDetail from "./components/ModalDetail";
//import Detail from "./components/Detail";

class ListPokemon extends React.Component {

    modalRef = React.createRef()

    constructor(props) {

        super(props)

        this.state = {

            pokemons: [],
            timePassed: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {

        axios.get(config.url)

            .then((response) => {

                this.setState({

                    pokemons: response.data.results

                })
                console.log(response.data.results);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })

    }
    handleClick(item) {

        if (this.modalRef.current) {
            this.modalRef.current.open(item)
        }
    }
    render() {
        setTimeout(() => { this.setState({ timePassed: true }) }, 3000);
        if (!this.state.timePassed) {
            return (
                <>
                <div className="container loader" style={{ textAlign: "center", marginTop: "15%", fontSize: "2.5rem", color: "#008d4b" }}>
                    <img src="./loader.gif" width={300} className=" text-center image" />
                   
                </div>
                 <p className="text-center" >Loading...</p>
                 </>
            );
        } else {

            return (
                <>
                    <div className="title">Nombre de pokemons: {this.state.pokemons.length + " Pokemeons"}
                        <Search />
                    </div>
                    <div className="row1">
                        {
                            this.state.pokemons.map((item, index) => <Pokemone handleClick={(pokemon) => this.handleClick(pokemon)} key={index} item={item} />
                            )
                        }
                    </div>
                    {/* <ModalDetail ref={this.modalRef}/> */}
                </>
            )
        }
    }
}
export default ListPokemon