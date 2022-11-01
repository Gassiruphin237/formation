import React from "react";
import axios from "axios";

class Detail extends React.Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        console.log(this.props.pokemon)
    }

    render(){
        return(
    <div>
        <div className="">
            <div className="t">
                <div className="">
                    <h1 className="-title fs-5" id="exampleLabel"> title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="" aria-label="Close"></button>
                </div>
                <div className="-body">
                   text
                </div>
                <div className="-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="" onClick={this.props.onClose}>Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
export default Detail;