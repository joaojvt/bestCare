import React from 'react'
import './styles.scss'
import checkIcon from '../../assets/check-icon.svg';
import Button from '../../components/Button';
import waves from '../../assets/price-waves.svg'
import { useHistory } from 'react-router-dom';
import Table from '../../components/Table';

const Prices = () => {

  const history = useHistory()

  const tableData = [
    { dayNum: 1, mediumPrice: 30, lergePrice: 35 },
    { dayNum: 2, mediumPrice: 55, lergePrice: 60 },
    { dayNum: 3, mediumPrice: 80, lergePrice: 85 },
    { dayNum: 4, mediumPrice: 105, lergePrice: 110 },
    { dayNum: 5, mediumPrice: 130, lergePrice: 135 },
    { dayNum: 6, mediumPrice: 155, lergePrice: 160 },
  ]

  return (
    <>
      <div id="params">
        <img className="params-waves" src={waves} />
        <div className="container">
          <div className="left">
          <h3 className="big-text">Our prices can change</h3>
          <p>
            Our prices may vary depending on:
          </p>
            <ul>
              <li><img src={checkIcon} alt="check" /> Size of your pet</li>
              <li><img src={checkIcon} alt="check" /> Number of days</li>
              <li><img src={checkIcon} alt="check" /> Time of the year</li>
            </ul>
          <p className="params-description">
            Also, if you have more than one <span className="yellow-text">pet you get a discount! </span>
            To know the exact price, get in touch!
          </p>
          <Button type="button" onClick={() => history.push('/contact')}>
            Contact
          </Button>
          </div>
        </div>
      </div>
      <div id="table-prices">
        <div className="container">
          <h3 className="big-text">Check our prices!</h3>
          <Table rows={tableData}/>
        </div>
      </div>
    </>
  )
}

export default Prices