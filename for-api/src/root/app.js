import React,{Component} from 'react';
import ApiCall from '../component/api';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component{

    render(){
        return(
            <React.Fragment>
                <h3 className="api">Api Call</h3>
                <ApiCall />
                <style jsx>
                    {
                        `
                        .api{
                             text-align:center;
                        }
                        `
                    }
                </style>
            </React.Fragment>
        )
    }
};

export default App;