import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';


import Router from './routes/router'

moment.locale('zh-cn');

render(
    <Router />,
    document.getElementById('root')
)
