import React, { FC } from 'react';
import { Collection } from '../types';
import { useNavigate } from 'react-router-dom';

interface CollectionCardProps {
   collection: Collection;
}

const CollectionCard: FC<CollectionCardProps> = ({ collection }) => {
   const navigate = useNavigate();

   return (
      <div onClick={() => navigate(`${collection.id}`)}>
         {collection.title}
      </div>
   );
};

export default CollectionCard;