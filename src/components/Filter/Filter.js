import PropTypes from 'prop-types';

import { StyledFilter } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <StyledFilter>
    <label className="labelFilter">
      Filter
      <input
        type="name"
        value={value}
        onChange={onChange}
        className="filterInput"
      />
    </label>
  </StyledFilter>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
