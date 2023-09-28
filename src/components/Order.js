import React from "react";
import { FaTrash } from "react-icons/fa";


class Order extends React.Component{
    render(){
        return(
            <div className="item">
                <img src={this.props.item.img} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.price}$</p>
                <FaTrash className="delete-item" 
                onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
        )
    }
}

export default Order