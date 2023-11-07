import RoutePanel from '../organism/RoutePanel';
import Map from '../molecules/Map';
import { ContentContainer } from '../atoms/ContentLayoutStyles';

const Layout = () => {
  return (
    <ContentContainer>
      <RoutePanel /> <Map />
    </ContentContainer>
  );
};

export default Layout;
