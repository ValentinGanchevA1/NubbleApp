import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

import {PostBottomProps} from './PostBottomProps';

export const PostBottom = ({
  author,
  text,
  commentCount,
  id,
}: PostBottomProps) => {
  const {navigate} = useNavigation();
  const commentText = getCommentText(commentCount);

  const navigateToPostCommentScreen = () => {
    navigate('PostCommentScreen', {postId: id, postAuthorId: author.id});
  };

  return (
    <Box marginTop="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text
          preset="paragraphSmall"
          bold
          color="primary"
          marginTop="s8"
          onPress={navigateToPostCommentScreen}>
          {commentText}
        </Text>
      )}
    </Box>
  );
};

const getCommentText = (commentCount: number) => {
  if (commentCount === 0) {
    return '';
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
};
