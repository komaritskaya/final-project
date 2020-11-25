import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialMenu from '../../material/menu';
import { Filter } from '../../const';
import { setFilter } from '../../actions/actionCreators';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();

  const activeFilter = useSelector((state) => state.app.filter);

  const onFilterClick = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <MaterialMenu
      options={Object.values(Filter)}
      selectedOption={activeFilter}
      clickHandler={onFilterClick}
    />
  );
};

export default Navigation;
