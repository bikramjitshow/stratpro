import React from 'react';

export const ScRewardTile = () => {
  {
    /*Add class name: `sc-reward-tile__half-circle--green` with sc-reward-tile__half-circle to display the module with green half circle
    Add class name: `sc-reward-tile__half-circle--green-gradient`  with sc-reward-tile__half-circle to display the module with green-gradient half circle
    Add class name: `sc-reward-tile__half-circle--blue` with sc-reward-tile__half-circle to display the module with blue half circle
    Add class name: `sc-reward-tile__half-circle--blue-gradient` with sc-reward-tile__half-circle to display the module with --blue-gradient half circle*/
  }
  return (
    <div className="sc-reward-tile">
      <div className="sc-reward-tile__item ">
        <div className="sc-reward-tile__half-circle sc-reward-tile__half-circle--green">
          <div className="sc-reward-tile__half-circle-content">
            <div className="sc-cvp">
              <div className="sc-cvp__col">
                <p className="sc-cvp__top">cashback</p>
                <p className="sc-cvp__middle">
                  <strong>
                    1<sub>%</sub>
                  </strong>
                </p>
                <p className="sc-cvp__bottom">cashback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-reward-tile__item-bottom">
        <div className="sc-reward-tile__bottom-content">
          <p>
            S$ <strong>15,000</strong> to S$ <strong>39,999</strong>
          </p>
          <p>approved loan can get you</p>
        </div>
        <div className="sc-reward-tile__bottom-content sc-reward-tile__bottom-content--larg-txt sc-reward-tile__bottom-content--green">
          <p>
            S$ <strong>15,000</strong> to S$ <strong>39,999</strong>
          </p>
          <p>approved loan can get you</p>
        </div>
      </div>
    </div>
  );
};
