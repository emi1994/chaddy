import React from 'react';
import { Divider } from './component-structure-divider';

export const DividerExample: React.FC = () => {
  return (
    <div>
      <h2>Divider Component Examples</h2>
      
      <h3>Basic Divider</h3>
      <Divider />

      <h3>Colored Divider</h3>
      <Divider color="#3498db" thickness={2} />

      <h3>Styled Divider</h3>
      <Divider color="#e74c3c" thickness={3} style="dashed" />

      <h3>Divider with Custom Width</h3>
      <Divider width="50%" color="#9b59b6" />

      <h3>Divider with Custom Margin</h3>
      <Divider margin="2rem 0" color="#f1c40f" thickness={4} />

      <h3>Dotted Divider</h3>
      <Divider style="dotted" color="#34495e" thickness={2} />
      <h3>Divider with Custom Class</h3>
      <Divider color="#2ecc71" className="my-custom-class" />
    </div>
  );
};