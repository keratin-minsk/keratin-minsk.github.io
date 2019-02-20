import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './../scss/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Кератиновое выарямление волос в Минске"
      meta={[
        { name: 'description', content: 'кератиновое выпрямление волос' },
        { name: 'keywords', content: 'кератин, минск, кератиновое выпрямление волос' },
      ]}
    />
    <div>
      <div className="menu">
        <div className="logo">Кератиновое выпрямление волос в Минске</div>
        <div className="menu-list hidden-xs">
          <Link to="/">Домой</Link>
          <Link to="/pricing">Цены</Link>
        </div>
        <div className="clear"></div>
      </div>
      {children()}
      <div className="footer">
        <div className="container">
          <div className="row centered">
            <h2>Контакты</h2>
            <h5>+375 (29) 135-17-90</h5>

            <p className="mt">
              <a href="https://www.instagram.com/keratin_darya.minsk/"><i className="ion-social-instagram"></i></a>
            </p>
            <h6 className="mt">COPYRIGHT 2019 - Andrew Kuzmin</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
