import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
} from 'react-router-dom';

import AppLayout from '../common/layouts/AppLayout';
import Topics from '../features/topics/pages/Topics';
import Topic from '../features/topics/pages/Topic';
import Collection from '../features/collections/pages/Collection';
import Collections from '../features/collections/pages/Collections';
import EditorialFeed from '../common/components/EditorialFeed';
import Search from '../common/components/Search';

export const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<AppLayout/>}>
         <Route index element={<EditorialFeed/>}/>
         <Route path="/topics" element={<Topics/>}/>
         <Route path="/topics/:id" element={<Topic/>}/>
         <Route path="/collections" element={<Collections/>}/>
         <Route path="/collections/:id" element={<Collection/>}/>
         <Route path="/search/*" element={<Search/>}/>
      </Route>,
   ),
);
