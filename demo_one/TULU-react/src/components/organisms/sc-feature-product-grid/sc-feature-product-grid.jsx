import React from 'react';
import { FeatureTiles } from '../../molecules/sc-feature-tile/sc-feature-tile';

import SampleImageOne from '../../../../static/images/feature-tile-one.png';
import SampleImageTwo from '../../../../static/images/feature-tile-two.png';
import SampleImageThree from '../../../../static/images/feature-tile-three.png';
import SampleImageFour from '../../../../static/images/feature-tile-four.png';

export const FeatureProductGrids = props => {
  return (
    <div className="sc-feature-product-grid">
      <div className="sc-content-wrapper">
        <div className="sc-heading-inner sc-title--center">
          <h2 className="sc-title sc-title--inner">{props.title}</h2>
          <p className="sc-description">{props.desc}</p>
        </div>
        <div className="sc-feature-product-grid__main-wrapper">
          <div className="sc-feature-product-grid__grid-box">
            <FeatureTiles
              class="sc-feature-tile--arrow"
              button="sc-btn--secondary-blue"
              more="Learn More"
              title="Online Payments"
              desc="like never before"
              showIcon={false}
              showImage={true}
              showTitle={true}
              showDesc={true}
              showMore={true}
              image={SampleImageOne}
            />
            <div className="sc-feature-product-grid__small-box">
              <FeatureTiles
                class="sc-feature-tile--green"
                button="sc-btn--secondary"
                more="Learn More"
                title="Get Paid Faster"
                desc="PayNow, Scan & Pay, Bill payments at your finger tip."
                showIcon={false}
                showImage={false}
                showTitle={true}
                showDesc={true}
                showMore={true}
                image=""
              />
              <FeatureTiles
                class="sc-feature-tile--light-gray"
                button="sc-btn--secondary-blue"
                more="Learn More"
                title="Credit Card Security"
                desc="Activate and set your PIN and more."
                showIcon={true}
                showImage={false}
                showTitle={true}
                showDesc={true}
                showMore={true}
                image=""
              />
            </div>
            <FeatureTiles
              class="sc-feature-tile--gray-gradient"
              button="sc-btn--secondary-blue"
              more="Learn More"
              title="Update Profile Details on the go"
              desc="Update your contact details and personal information on your profile."
              showIcon={false}
              showImage={true}
              showTitle={true}
              showDesc={true}
              showMore={true}
              image={SampleImageTwo}
            />
          </div>

          <div className="sc-feature-product-grid__half-box">
            <FeatureTiles
              class="sc-feature-tile--blue-gradient sc-feature-tile--img-right"
              button="sc-btn--secondary"
              more="Learn More"
              title="Service Requests Anywhere, Anytime"
              desc="Skip the queue, raise and track your account & cards and other services anywhere, anytime"
              showIcon={false}
              showImage={true}
              showTitle={true}
              showDesc={true}
              showMore={true}
              image={SampleImageThree}
            />
            <FeatureTiles
              class="sc-feature-tile--gray sc-feature-tile--img-left"
              button="sc-btn--secondary-blue"
              more="Learn More"
              title="Quick & Easy to Apply for Products"
              desc="Instantly apply for accounts, credit cards, insurance and more."
              showIcon={false}
              showImage={true}
              showTitle={true}
              showDesc={true}
              showMore={true}
              image={SampleImageFour}
            />
          </div>

          <div className="sc-feature-product-grid__half-box sc-feature-product-grid__half-box--right-small">
            <FeatureTiles
              class="sc-feature-tile sc-feature-tile--img-right"
              button="sc-btn--secondary-blue"
              more="Learn More"
              title="Service Requests Anywhere, Anytime"
              desc="Skip the queue, raise and track your account & cards and other services anywhere, anytime"
              showIcon={false}
              showImage={true}
              showTitle={true}
              showDesc={true}
              showMore={true}
              image={SampleImageFour}
            />
            <FeatureTiles
              class="sc-feature-tile--light-gray"
              button="sc-btn--secondary-blue"
              more="Learn More"
              title="Quick & Easy to Apply for Products"
              desc="Instantly apply for accounts, credit cards, insurance and more."
              showIcon={false}
              showImage={false}
              showTitle={true}
              showDesc={true}
              showMore={true}
              image=""
            />
          </div>

          <div className="sc-feature-product-grid__half-box sc-feature-product-grid__half-box--left-small">
            <FeatureTiles
              class="sc-feature-tile--green"
              button="sc-btn--secondary"
              more="Learn More"
              title="Get Paid Faster"
              desc="PayNow, Scan & Pay, Bill payments at your finger tip."
              showIcon={false}
              showImage={false}
              showTitle={true}
              showDesc={true}
              showMore={true}
              image=""
            />
            <FeatureTiles
              class="sc-feature-tile--gradient-gray sc-feature-tile--img-left"
              button="sc-btn--secondary-blue"
              more="Learn More"
              title="Quick & Easy to Apply for Products"
              desc="Instantly apply for accounts, credit cards, insurance and more."
              showIcon={false}
              showImage={true}
              showTitle={true}
              showDesc={true}
              showMore={true}
              image={SampleImageOne}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
