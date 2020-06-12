import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './components/login';
import Index from './components';
export const RouterComp = () => {
    return(
        <Router>
            <Stack key="root" hideNavBar>

                <Stack initial key="auth">
                    <Scene
                        initial 
                        key="login"
                        component={Login} />
                </Stack>
                <Stack key="main">
                    <Scene
                        key="index"
                        component={Index} />
                </Stack>
            </Stack>
        </Router>
    )
}