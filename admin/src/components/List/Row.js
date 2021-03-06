import React from 'react';
import { IconLinks } from '@buffetjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

import {
  faTrash,
  faPencilAlt,
  faCube,
} from '@fortawesome/free-solid-svg-icons';

const CustomRow = ({ changefreq, priority, name, onDelete, settingsType }) => {
  const { push } = useHistory();
  const styles = {
    name: {
      textTransform: settingsType === 'Collection' ? 'capitalize' : 'none',
    },
  };

  const handleEditClick = (e) => {
    push({ edit: name });
    e.stopPropagation();
  };

  const handleDeleteClick = (e) => {
    onDelete(name, settingsType);
    e.stopPropagation();
  };

  return (
    <tr>
      <td>
        <p style={styles.name}>{settingsType === 'Custom' && '/'}{name}</p>
      </td>
      <td>
        <p>{changefreq}</p>
      </td>
      <td>
        <p>{priority}</p>
      </td>
      <td>
        <IconLinks links={[
          {
            icon: <FontAwesomeIcon icon={faPencilAlt} />,
            onClick: handleEditClick,
          },
          {
            icon: <FontAwesomeIcon icon={faTrash} />,
            onClick: handleDeleteClick,
          },
        ]} />
      </td>
    </tr>
  );
};

export default CustomRow