import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
      super(props);
      this.changeList = this.changeList.bind(this);
    }

    changeList() {
      this.props.changeList(this.refInput.value,this.props.index);
    }

    render() {
      return(
            <div>
               <span className='Number'>{this.props.index + 1 + "."}</span> 
               <input type='text' 
                    className='List'
                    value={this.props.value} 
                    onChange={this.changeList}
                    index={this.props.index}
                    ref = {t => this.refInput = t} 
                     />
            </div>
        );
    }
  }

  export default List;