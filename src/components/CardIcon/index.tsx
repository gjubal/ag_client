import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

import { Box } from './styles';

interface CardProps {
  type: 'edit' | 'remove';
}

const CardIcon: React.FC<CardProps> = ({ type }) => {
  return <Box>{type === 'edit' ? <FiEdit /> : <FiTrash />}</Box>;
};

export default CardIcon;
