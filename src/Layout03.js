import React from 'react';
import PropTypes from 'prop-types';
import GlobalHeader from './GlobalHeader.js';
import PageHeader from './PageHeader.js';
import SideNav from './SideNav.js';

class Layout03 extends React.Component {
  render() {
    return (
      <div>
        <GlobalHeader />
        <PageHeader />
        <SideNav
          content={this.props.sideNavContent}
          columnWidth={this.props.sideNavColumnWidth}
        />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Layout03.propTypes = {
  sideNavContent: PropTypes.object.isRequired,
  sideNavColumnWidth: PropTypes.number,
  children: PropTypes,
};

Layout03.defaultProps = {};
export default Layout03;
