import React,{Component} from 'react';

class ApiCall extends Component{

    constructor(props){
        super(props);
        this.state={
            users:null
        }
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users?page=2').then((resp)=>{
            resp.json().then((result)=>{
                //console.warn(result.data)
                this.setState({
                    users:result.data
                })
            })
        })
    }

    render(){
        const {users} = this.state
        return(
            <React.Fragment>
                <div className="col-md-12">
                    <table className="table border table-striped">
                        <thead >
                            <tr>
                                <th>first Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?
                                 users.map((obj,index)=>
                                    <tr key={index}>
                                        <td>{obj.first_name}</td>
                                        <td>{obj.last_name}</td>
                                        <td>{obj.email}</td>
                                    </tr>
                                )
                                :
                                null
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
};
export default ApiCall;