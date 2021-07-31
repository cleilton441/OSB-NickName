import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AccountRoutes } from '../../features/account/constants/routes'
import { NickName } from '../../features/account/pages/NickName/NickName'

export const Router : React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={AccountRoutes.nickname} component={NickName} />
            </Switch>
        </BrowserRouter>
    )
}