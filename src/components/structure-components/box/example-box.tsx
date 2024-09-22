'use client'

import React from 'react';
import { Box } from './components-structure-box';

export const BoxExample: React.FC = () => {
  return (
    <div>
      <h2>Box Component Examples</h2>
      
      <h3>Basic Box</h3>
      <Box width="200px" height="100px" backgroundColor="#f0f0f0" padding="20px">
        This is a basic box
      </Box>

      <h3>Styled Box</h3>
      <Box
        width="250px"
        height="150px"
        backgroundColor="#e0e0ff"
        padding="15px"
        margin="20px 0"
        borderRadius="10px"
      >
        This box has custom styling
      </Box>

      <h3>Inline Box</h3>
      <Box
        display="inline-block"
        width="100px"
        height="100px"
        backgroundColor="#ffe0e0"
        padding="10px"
        margin="0 10px"
      >
        Inline Box 1
      </Box>
      <Box
        display="inline-block"
        width="100px"
        height="100px"
        backgroundColor="#e0ffe0"
        padding="10px"
        margin="0 10px"
      >
        Inline Box 2
      </Box>

      <h3>Nested Boxes</h3>
      <Box
        width="400px"
        height="200px"
        backgroundColor="#e0e0e0"
        padding="20px"
      >
        <Box width="45%" height="100%" backgroundColor="#c0c0c0" padding="10px" display="inline-block">
          Left Box
        </Box>
        <Box width="45%" height="100%" backgroundColor="#a0a0a0" padding="10px" display="inline-block" margin="0 0 0 10%">
          Right Box
        </Box>
      </Box>
    </div>
  );
};