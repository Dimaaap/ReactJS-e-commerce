import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.item.img}
         onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>
          +{/* Зміна this.props.onAdd на this.props.odAdd */}
        </div>
      </div>
    );
  }
}

export default Item;





