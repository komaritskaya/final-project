import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialMenu from '../../material/menu';
// import { Filter } from '../../const';
import { changeFilter } from '../../actions/actionCreators';
import { FilterType, State } from '../../types';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();

  const activeFilter = useSelector((state: State) => state.app.filter);

  const onFilterClick = useCallback((filter) => {
    dispatch(changeFilter(filter));
  }, [dispatch]);

  return (
    <MaterialMenu
      options={Object.values(FilterType)}
      selectedOption={activeFilter}
      clickHandler={onFilterClick}
    />
  );
};

export default Navigation;
