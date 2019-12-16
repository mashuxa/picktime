import './styles/normalize.scss';
import './styles/grid.scss';
import './styles/utilities.scss';
import DatePicker from '../../../../react-date-picker/';
import React from 'react';
import {Provider} from 'react-redux';

function App(props) {
    return (
      <Provider store={props.store}>
        <DatePicker initialDate={new Date()}
                    onChange={''}
                    store={props.store}
                    title={'Start date'}
        />
      </Provider>
    );
}

export {App};
