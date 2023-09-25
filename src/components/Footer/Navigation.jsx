import React from 'react';
import '../../styles/Footer/Navigation.css';
import SocialMedia from './SocialMedia';
import SiteMap from './SiteMap';
import Info from './Info'
import CopyRight from './CopyRight';

function Navigation() {
  return (
    <Navigation>
        <SiteMap/>
        <SocialMedia/>
        <Info/>
        <CopyRight/>
    </Navigation>
  );
}

export default Navigation;