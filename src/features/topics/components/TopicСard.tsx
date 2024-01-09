import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { Topic } from '../types';
import Flexbox from '../../../common/components/Flexbox';
import useThemeProps from '../../../common/hooks/useThemeProps';

interface TopicCardProps {
   topic: Topic;
};

const TopicsCard: FC<TopicCardProps> = ({ topic }) => {
   const { shadows } = useThemeProps();
   const {
      title,
      slug,
      cover_photo,
      description,
      total_photos,
      starts_at,
   } = topic;
   const navigate = useNavigate();

   return (
      <Box
         component="a"
         onClick={() => navigate(`${slug}`)}
      >
         <Box
            sx={{
               boxShadow: shadows.main,
               '&:hover': {
                  boxShadow: shadows.mainHover,
               },
               borderRadius: '4px',
               overflow: 'hidden',
               transition: 'all .3s ease-in-out',
            }}
         >
            <Flexbox
               sx={{
                  flexDirection: 'column',
               }}
            >
               <Flexbox sx={{
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden',
                  height: '200px',
               }}>
                  <Box>
                     <img
                        srcSet={`
                        ${cover_photo.urls.regular}?auto=format&fit=crop&w=480 480w,
                     `}
                        src={cover_photo.urls.regular}
                        loading="lazy"
                     />
                  </Box>
               </Flexbox>
               <Flexbox
                  sx={{
                     flexDirection: 'column',
                     padding: '1.5rem',
                  }}
               >
                  <Box sx={{ marginBottom: '0.9rem' }}>
                     <Typography variant="subTitle">
                        {title}
                     </Typography>
                  </Box>
                  <Box sx={{ marginBottom: '0.7rem' }}>
                     <Typography
                        variant="mainText"
                        sx={{
                           WebkitLineClamp: '2',
                           WebkitBoxOrient: 'vertical',
                           display: '-webkit-box',
                           overflow: 'hidden',
                        }}>
                        {description}
                     </Typography>
                  </Box>
                  <Box>
                     <Typography variant="secondaryText">
                        {total_photos} photos
                     </Typography>
                  </Box>
               </Flexbox>
            </Flexbox>
         </Box>
      </Box>
   );
};

export default TopicsCard;