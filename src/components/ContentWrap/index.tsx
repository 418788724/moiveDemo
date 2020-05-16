import React from 'react';
import styles from './index.less';

export interface ContentWrapProps {
  className?: string;
}

const ContentWrap: React.FC<ContentWrapProps> = (props) => {
  const { children, className } = props;
  return <div className={className || styles.content_default}>{children}</div>;
};

export default ContentWrap;
