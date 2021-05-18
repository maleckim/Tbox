import React from 'react';

export const RangeView = ({ cell }) => (
  <input
    type="range"
    value={cell.value}
    disabled
    style={{ pointerEvents: 'none' }}
  />
);

export const RangeEdit = ({ cell, onChange }) => (
  <input
    type="range"
    onChange={(e) => {
      onChange({ ...cell, value: e.target.value });
    }}
    value={cell.value || 0}
    autoFocus
  />
);
