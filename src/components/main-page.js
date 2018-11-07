import React from 'react';
import axios from 'axios';

export default class MainPage extends React.Component {
    componentDidMount(){
        this.getData();
    }
    async getData(){
        const resp = await axios.get('http://mhw-db.com/armor');
        console.log(resp.data)
    }
    render(){
        return(
            <div>HELLO</div>
        )
    }
}
