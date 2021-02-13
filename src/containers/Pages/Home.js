import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../../assets/img/header-bg.jpg';

class Home extends Component {
    render() {
        const title = 'welcome to my weBlog';
        const subtitle = 'I hope you find what you looks for';
        const buttonText = 'contact with me'
        return (<div>
            <Header
                image={image}
                title={title}
                subtitle={subtitle}
                buttonText={buttonText}
                link='/services'
                showButton />
        </div>);
    }
}

export default Home;