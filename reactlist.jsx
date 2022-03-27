import React, {Component} from 'react';
import {connect} from 'react-redux';
 
 
class GankList extends Component {
    constructor(props) {
        super(props);
        this.renderLine = this.renderLine.bind(this);
    }
 
    renderLine(item) {
        return (
            <tr key={item._id} className="row">
                <td className="col-md-6">{item.type}</td>
                <td className="col-md-6"><img src={item.url} className="img-thumbnail"/></td>
            </tr>
        );
    }
 
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                                         <th> красавицы </th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.gank.map(this.renderLine)
                }
                {
                    console.log("gank" + this.props.gank)
                }
                </tbody>
            </table>
        );
    }
}
 
function mapStateToProps({gank}) {
    return {gank};
}
 
export default connect(mapStateToProps)(GankList);
