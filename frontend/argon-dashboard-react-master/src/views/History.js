import React from "react";
import Header from "../components/Headers/Header.js";
import CustomTable from "../components/Other/CustomTable";
import RecordsServices from "../services/recordsServices.js";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history : [],
        }
    }

    columns = [{
        dataField: 'record_id',
        text: 'ID',
        sort: true,
        hidden: true,
        headerAlign: 'center',
        headerStyle: { fontWeight: 'bold', backgroundColor: 'white' }
    },
    {
        dataField: 'project_name',
        text: 'ProjectName',
        sort: true,
        hidden: false,
        headerAlign: 'center',
        headerStyle: sessionStorage.getItem('role') === 'user' ? { fontWeight: 'bold', backgroundColor: 'white', width: '50%' } : { fontWeight: 'bold', backgroundColor: 'white', width: '25%' },
        editable: false
    }, {
        dataField: 'user_name',
        text: 'UserName',
        sort: true,
        hidden: sessionStorage.getItem('role') === 'user' ? true : false,
        headerAlign: 'center',
        headerStyle: sessionStorage.getItem('role') === 'user' ? { fontWeight: 'bold', backgroundColor: 'white', width: '50%' } : { fontWeight: 'bold', backgroundColor: 'white', width: '25%' },
    }, {
        dataField: 'week',
        text: 'Week',
        sort: true,
        hidden: false,
        headerAlign: 'center',
        headerStyle: { fontWeight: 'bold', backgroundColor: 'white', width: '16%' },
        editable: false
    }, {
        dataField: 'year',
        text: 'Year',
        sort: true,
        hidden: false,
        headerAlign: 'center',
        headerStyle: { fontWeight: 'bold', backgroundColor: 'white', width: '16%' },
        editable: false
    }, {
        dataField: 'hours',
        text: 'Hours',
        sort: true,
        hidden: false,
        headerAlign: 'center',
        headerStyle: { fontWeight: 'bold', backgroundColor: 'white', width: '16%'  }
    }
]

    componentDidMount = async () => {
        const ds = RecordsServices.getAllUserRecords(sessionStorage.getItem('username')).then(result => result);
        await Promise.all([ds]).then((response) => {
            this.setState({
                history : response[0]
            })
        })
    }

    render() {
        return (
            <>
                <Header />
                <div style={page}><br />
                    <div style={tableContainer} >
                        <div style={{ textAlign: 'right' }} className="mt-4">
                            <h2>HISTORY</h2>
                        </div><br />
                        <br />
                        <CustomTable data = {this.state.history} columns = {this.columns} searchBox exportCSV='History'/>
                    </div>
                </div>

               </>
        )
    }
}

const tableContainer = {
    marginLeft: '5%',
    marginRight: '5%',
    color: 'black'
}

const page = {
    minHeight: '82vh'
}

export default Users;
