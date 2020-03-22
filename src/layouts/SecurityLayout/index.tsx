import React from 'react';
import { connect } from 'dva';

import { ConnectState, ConnectProps } from '@/models/connect';
import Login from '@/components/Login';
import { CurrentUser } from '@/models/user';

interface SecurityLayoutProps extends ConnectProps {
  loading?: boolean;
  currentUser?: CurrentUser;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = props => {
  return <Login />;
};

export default connect(({ user, loading }: ConnectState) => ({
  user: user.currentUser,
  loading: loading.models.user,
}))(SecurityLayout);
