import React from 'react';
import { render } from 'react-dom'


var HomePage = React.createClass({

    render: function() {
        return(
            <div className="container">
                <div className="jumbotron jumbo">
                    <img src="../../images/react-logo.png" alt="React Logo" style={{height:"100px"}}/>
                    <h1 className="heading">React-Flux web application</h1>
                    <div className="well" style={{backgroundColor:"#ffffff"}}>
                        <img src="../../images/folderstr.png" />
                    </div>
                    <footer>
                        with <span className="glyphicon glyphicon-heart"></span> from CKR.
                    </footer>
                </div>
            </div>
        )
    }
});

module.exports = HomePage;
