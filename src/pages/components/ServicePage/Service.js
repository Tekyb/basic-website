import React from 'react';

import SEO from '../../seo';

import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

import './Service.scss';

import TestDataPic from '../common/posts/datapic';

const ServicePage = ({ location }) => (
  <div>
    <SEO title="Service" />
    <div className="page-header">
      <div className="container">
        <p className="page-title">Service</p>
      </div>
    </div>
    <div className="location">
      <div className="container">
        <Breadcrumb
          location={location}
          style={{ color: '#777' }}
          crumbLabel="Service"
          crumbStyle={{ color: '#999' }}
          crumbActiveStyle={{ color: '#777' }}
          crumbWrapperStyle={{ border: 'none', background: 'none' }}
        />
      </div>
    </div>
    <div className="pages">
      <div className="service">
        <div className="container">
          <TestDataPic />
        </div>
      </div>
    </div>
  </div>
);

export default ServicePage;
