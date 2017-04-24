'use strict';

import React from 'react';
import {Link} from 'react-router';

class SliderBar extends React.Component {
 	constructor(props){
    	super(props);
    	this.state = {
    	};
  	}
  	render() {
    	return <div className='leftContainer'>
    	  <Link to="/sex" activeClassName='active'>性别</Link>
        <Link to="/age" activeClassName='active'>年龄</Link>
        <Link to="/edu" activeClassName='active'>学历</Link>
    	</div>;
  	}
}

export default SliderBar; 