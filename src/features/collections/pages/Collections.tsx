import React from 'react';
import { useGetCollectionsQuery } from '../collectionsSlice';
import CollectionCard from '../components/CollectionCard';
import { Collection } from '../types';
import Error from '../../../common/components/Error';

const Collections = () => {
   const {
      data: collections,
      isLoading,
      isSuccess,
   } = useGetCollectionsQuery({ page: 1 });

   if (!isSuccess) {
      return <Error/>;
   }

   return (
      <div>
         {collections.map((collection: Collection) => (
            <CollectionCard
               key={collection.id}
               collection={collection}
            />
         ))}
      </div>
   );
};

export default Collections;