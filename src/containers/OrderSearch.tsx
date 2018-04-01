import React from "react";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import { connect } from "react-redux";
  import { bindActionCreators } from "redux";

import {loadApplications} from "./../redux/actions/applicationActions";

interface IOrderSearchActions {
    loadApplications: any;
}

interface IOrderSearchProps {
    application?: string;
    actions: IOrderSearchActions;
}


class orderSearch extends React.Component<IOrderSearchProps,any>{
    constructor(props, context){
        super(props, context);
    }

    componentDidMount() {
       this.props.actions.loadApplications();
    }

    render() {
        return(
        <div>
            <h3>order list</h3>
            <Table>
            <TableHeader>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody>
            <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn>Christopher Nolan</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            </TableBody>
        </Table>
        </div>
        );
    }
};

function mapStateToProps(state, ownProps) {
    return {
        application: state.application,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ loadApplications }, dispatch)
    };
}

export default connect(mapStateToProps,   mapDispatchToProps)(orderSearch);
