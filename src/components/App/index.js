import './styles/normalize.scss';
import './styles/grid.scss';
import './styles/utilities.scss';

import React from 'react';

function App({children}) {
    return (
        <React.Fragment>
            <div className="page-wrapper">
                <main className="main">
                    {children}
                </main>
            </div>
        </React.Fragment>
    );
}

export {App};
