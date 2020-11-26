import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialMenu from '../../material/menu';
import { Filter } from '../../const';
import { changeFilter } from '../../actions/actionCreators';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();

  const activeFilter = useSelector((state) => state.app.filter);

  const onFilterClick = useCallback((filter) => {
    dispatch(changeFilter(filter));
  }, [dispatch]);

  return (
    <MaterialMenu
      options={Object.values(Filter)}
      selectedOption={activeFilter}
      clickHandler={onFilterClick}
    />
  );
};

export default Navigation;
