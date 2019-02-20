import React from 'react'
import Link from 'gatsby-link'

import client1Img from '../img/client1.png'
import client3Img from '../img/client3.png'
import client2Img from '../img/client2.png'
import client4Img from '../img/client4.png'
import client5Img from '../img/client5.png'

const Pricing = () => (
  <div>
    <div className="container ptb">
      <div className="row centered">
        <h2 className="mb">Лучшие цены в Минске</h2>
        <div className="col-md-4">
          <div className="price-table">
            <div className="p-head">
              20 - 30 см
            </div>
            <div className="p-body">
              {/* <ul className="features">
                <li>10GB Storage Space</li>
                <li>Free Support</li>
                <li>100 Users</li>
                <li>100GB Bandwith</li>
              </ul> */}
              <div className="price">
                <span className="sub">BYN</span>
                <span className="detail">35 - 50</span>
              </div>
                <a href="https://www.instagram.com/keratin_darya.minsk/">
                  <button className="btn btn-conf-2 btn-green">Записаться</button>
                </a>  
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="price-table">
            <div className="p-head">
              30 - 35 см
            </div>
            <div className="p-body">
              {/* <ul className="features">
                <li>10GB Storage Space</li>
                <li>Free Support</li>
                <li>100 Users</li>
                <li>100GB Bandwith</li>
              </ul> */}
              <div className="price">
                <span className="sub">BYN</span>
                <span className="detail">50 - 60</span>
              </div>
                <a href="https://www.instagram.com/keratin_darya.minsk/">
                  <button className="btn btn-conf-2 btn-green">Записаться</button>
                </a>  
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="price-table">
            <div className="p-head">
              35 - 40 см
            </div>
            <div className="p-body">
              {/* <ul className="features">
                <li>10GB Storage Space</li>
                <li>Free Support</li>
                <li>100 Users</li>
                <li>100GB Bandwith</li>
              </ul> */}
              <div className="price">
                <span className="sub">BYN</span>
                <span className="detail">60 - 80</span>
              </div>
                <a href="https://www.instagram.com/keratin_darya.minsk/">
                  <button className="btn btn-conf-2 btn-green">Записаться</button>
                </a>  
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="price-table">
            <div className="p-head">
              40 - 45 см
            </div>
            <div className="p-body">
              {/* <ul className="features">
                <li>10GB Storage Space</li>
                <li>Free Support</li>
                <li>100 Users</li>
                <li>100GB Bandwith</li>
              </ul> */}
              <div className="price">
                <span className="sub">BYN</span>
                <span className="detail">80 - 90</span>
              </div>
                <a href="https://www.instagram.com/keratin_darya.minsk/">
                  <button className="btn btn-conf-2 btn-green">Записаться</button>
                </a>  
            </div>
          </div>
        </div>

      </div>
    </div>

    <div id="green">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 centered">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

              <div className="carousel-inner">
                <div className="item active">
                  <h3>В данный момент действует акция: Оплата только материала (цены в 2 раза меньше указанных).</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Pricing
