import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IntroductionContainer from './IntroductionContainer';
import ProjectsContainer from './ProjectsContainer';
import ContactMeContainer from './ContactMeContainer';
import NavigationBar from '../components/HeaderFooterNav/NavigationBar';

const MainAppContainer = () => {
    
    return(
        <Router>
            <>
            <NavigationBar></NavigationBar>
            <section>
                <Switch>
                    <Route exact path ="/" component={IntroductionContainer} />

                    <Route exact path="/projects" component={ProjectsContainer} />

                    <Route exact path="/contact" component={ContactMeContainer} />
                </Switch>
            </section>
            </>
        </Router>
    )
}

export default MainAppContainer;