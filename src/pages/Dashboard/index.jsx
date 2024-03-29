import MetaDecorator from 'components/common/MetaDecorator';
import Header from 'components/common/Header';
import Sprints from 'components/DashboardComponents/Sprints';
import Issues from 'components/DashboardComponents/Issues';
import Sidebar from 'components/common/Sidebar';

import * as Style from './styled';

const Dashboard = () => (
  <Style.Wrapper>
    <MetaDecorator title="Dashboard" />
    <Header />
    <Style.WrapperBody>
      <Sprints />
      <Issues />
      <Sidebar />
    </Style.WrapperBody>
  </Style.Wrapper>
);

export default Dashboard;
