import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpreadSheet from '../components/SpreadSheet';
import { RangeView, RangeEdit } from '../../utils/tSheetHelper';
// import ContextMenu from './components/ContextMenu'
import timeHelper from '../../utils/timeHelper.js';

export function TSheet() {
  const dispatch = useDispatch();

  

  const data = [
    {
      '06:24': ['matt', 'tony', 'abby', 'misskitty', 'poop'],
      '07:04': ['itty', 'bitty', 'buddy', 'pal'],
      '07:28': ['tiger', 'bubba', 'test'],
      '08:56': ['solo'],
    },
  ];

  return (
    <div>
      <SpreadSheet data={data} />
    </div>
  );
}
