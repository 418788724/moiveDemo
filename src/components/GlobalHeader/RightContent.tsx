// import { Tooltip, Tag } from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Link, useIntl, connect, ConnectProps } from 'umi';
import { ConnectState } from '@/models/connect';
import HeaderSearch from '../HeaderSearch';
import SelectLang from '../SelectLang';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';
export interface GlobalHeaderRightProps extends Partial<ConnectProps> {
  theme?: SiderTheme;
  layout: 'sidemenu' | 'topmenu';
}

// const ENVTagColor = {
//   dev: 'orange',
//   test: 'green',
//   pre: '#87d068',
// };

const GlobalHeaderRight: React.FC<GlobalHeaderRightProps> = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }

  const { formatMessage } = useIntl();

  const rightHelp = [
    {
      name: formatMessage({ id: 'component.globalHeader.help' }),
      uri: '/statement',
    },
    {
      name: formatMessage({ id: 'component.globalHeader.msg' }),
      uri: '/msg',
    },
    {
      name: formatMessage({ id: 'component.globalHeader.faq' }),
      uri: '/feedback',
    },
  ];

  const RightHelpRender = () => {
    const listItems = rightHelp.map((item) => (
      <Link className={styles.rightHelpLink} key={item.uri} to={item.uri}>
        {item.name}
      </Link>
    ));
    return <div>{listItems}</div>;
  };

  return (
    <div className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder={formatMessage({ id: 'component.globalHeader.search' })}
        options={[
          { label: <a href="/search?name=西部世界">西部世界</a>, value: '西部世界' },
          {
            label: <a href="/search?name=绝命毒师">绝命毒师</a>,
            value: '绝命毒师',
          },
          {
            label: <a href="/search?name=极速追击">极速追击</a>,
            value: '极速追击',
          },
          {
            label: <a href="/search?name=权力的游戏">权力的游戏</a>,
            value: '权力的游戏',
          },
        ]}
        onSearch={(value) => {
          console.log('input', value);
        }}
      />
      <RightHelpRender />
      {/* {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )} */}
      <SelectLang className={styles.action} />
    </div>
  );
};

export default connect(({ settings }: ConnectState) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
