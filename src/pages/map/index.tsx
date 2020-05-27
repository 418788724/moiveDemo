import React from 'react';
import { useIntl, useLocation } from 'umi';
import { Row, Col, Card, Pagination } from 'antd';
import ImgCard from '@/components/ImgCard';
import pathToRegexp from 'path-to-regexp';
import styles from './index.less';

export default () => {
  const location = useLocation();
  const re = pathToRegexp('/map/:type').exec(location.pathname);
  const ListImg = () => {
    const arr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 24; i++) {
      arr.push(i);
    }
    const ListItem = arr.map((_, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <Col key={index} xs={12} sm={8} md={6} xl={4}>
          <ImgCard />
        </Col>
      );
    });
    return <Row gutter={[16, 16]}>{ListItem}</Row>;
  };

  const onShowSizeChange = (current: Number, pageSize: Number) => {
    console.log(current, pageSize);
  };
  const { formatMessage } = useIntl();
  return (
    <div>
      <Card title={formatMessage({ id: re ? `menu.map.${re && re[1]}` : 'menu.map' })}>
        <ListImg />
        <div className={styles.paginationCenter}>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
          />
        </div>
      </Card>
    </div>
  );
};
