import React, {Component} from "react";
import newdata from "../newdata";


class Typeform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newdata: []
        }
    }

    componentDidMount() {
        fetch("./newdata.json").then((res) => res.json())
            .then((data) => {
                console.log(data)

                this.setState({ newdata: JSON.stringify(data) }, () => {
                    alert(this.state.hugeText);
                });
            })
    }

    render() {
        const newdata = this.state.newdata
        return (
            <div className="typeform">
            <div className="grid1">
                <p className="type-text">
                    My typefrom
                </p>
    
            </div>
    
            <div className="grid2">
                <p className="type-text">
                    new typeform
                </p>
                
            </div>
    
        </div>
        );
    }
}

export default Typeform;