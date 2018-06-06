import React, { Component } from 'react';
import { getLotWithReviewer, clearLotWithReviewer } from '../../actions';
import { connect } from 'react-redux';

class LotView extends Component {

    componentWillMount(){
        this.props.dispatch(getLotWithReviewer(this.props.match.params.id))
    }

    componentWillUnmount(){
        this.props.dispatch(clearLotWithReviewer())
    }

    renderLot = (lots) => (
        lots.lot ? 
            <div className="br_container">
                <div className="br_header">
                    <h2>{lots.lot.name}</h2>
                    <h5>{lots.lot.author}</h5>
                    <div className="br_reviewer">
                        <span>Review by:</span> {lots.reviewer.name} {lots.reviewer.lastname}
                    </div>
                </div>
                <div className="br_review">
                    {lots.lot.review}
                </div>
                <div className="br_box">
                    <div className="left">
                        <div>
                            <span>Pages:</span> {lots.lot.pages}
                        </div>
                        <div>
                            <span>Price:</span> {lots.lot.price}
                        </div>
                    </div>
                    <div className="right">
                        <span>Rating</span>
                        <div>{lots.lot.rating}/5</div>
                    </div>
                </div>
            </div>
        :null
    )

    render() {
        let lots = this.props.lots;
        return (
            <div>
                {this.renderLot(lots)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        lots: state.lots
    }
}

export default connect(mapStateToProps)(LotView)