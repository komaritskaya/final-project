import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { FilterType } from '../../types';
import { Filter } from '../../const';
import { ActionCreator } from '../../reducers/reducer';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();

  const onFilterClick = (filter) => {
    dispatch(ActionCreator.setFilter(filter));
  };

  return (
    <ul>
      {Object.values(Filter).map((filter) => (
        <li
          key={nanoid()}
        >
          <div
            role="button"
            tabIndex={0}
            onClick={(evt) => {
              evt.preventDefault();
              onFilterClick(filter as FilterType);
            }}
            onKeyDown={(evt) => {
              evt.preventDefault();
              onFilterClick(filter as FilterType);
            }}
          >
            {filter}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
