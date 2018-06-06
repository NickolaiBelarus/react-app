import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLots } from '../actions';

import LotItem from '../widgetsUI/lot_item';

class HomeContainer extends Component {

    componentWillMount(){
        this.props.dispatch(getLots(1,0,'desc'))
    }


    renderItems = (lots) => (
        lots.list ?  
            lots.list.map( item => (
                <LotItem {...item} key={item._id}/>
            ))
        :null
    )

    loadmore = () => {
        let count = this.props.lots.list.length;
        this.props.dispatch(getLots(1,count,'desc',this.props.lots.list))
    }

    render() {
        return (
            <div>
               {this.renderItems(this.props.lots)}
               <div 
                    className="loadmore"
                    onClick={this.loadmore}
                >Load More</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        lots:state.lots
    }
}

export default connect(mapStateToProps)(HomeContainer)