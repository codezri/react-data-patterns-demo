import React from 'react';
import UserTableAutonomous from './components/UserTableAutonomous';
import UserTableHOC from './components/UserTableHOC';
import UserTableReactHooks from './components/UserTableReactHooks';
import UserTableRenderProps from './components/UserTableRenderProps';
import SimpleUserTable from './components/SimpleUserTable';

import './App.css';

function App() {
    return (
        <div className='App'>
            <h2> User Table - Autonomous</h2>
            <UserTableAutonomous/>
            <h2> User Table - Higher Order Component</h2>
            <UserTableHOC/>
            <h2> User Table - Render Props</h2>
            <UserTableRenderProps children={SimpleUserTable}/>
            <h2> User Table - React Hooks</h2>
            <UserTableReactHooks/>
        </div>
    );
}

export default App;
