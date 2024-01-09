import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/material';

export default function TemporaryDrawer() {
   const [state, setState] = React.useState(false);

   const toggleDrawer = (open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
   ) => {
      if (
         event.type === 'keydown' &&
         ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
      ) {
         return;
      }
      setState(open);
   };

   const items = (
      <div
         onClick={toggleDrawer(false)}
         onKeyDown={toggleDrawer(false)}
      >
         <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
               <ListItem key={text} disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                     </ListItemIcon>
                     <ListItemText primary={text}/>
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </div>
   );

   return (
      <div>
         <Button onClick={toggleDrawer(true)}>left</Button>
         <Drawer
            anchor="left"
            open={state}
            onClose={toggleDrawer(false)}
         >
            {items}
         </Drawer>
      </div>
   );
}