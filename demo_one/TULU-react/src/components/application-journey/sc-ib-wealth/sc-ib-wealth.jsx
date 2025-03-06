import React, { useEffect } from 'react';
import ScIbWealth from './sc-ib-wealths.js';

export const InternationalMortgages = () => {
  useEffect(() => {
    ScIbWealth.init();
  }, []);
  return (
    <>
      {/* Order Mapping (add paramerter in the URL) ?order=alt1 */}
      <script
        type="application/json"
        id="order-mappings"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            alt1: ['cio', 'usdtime', 'usdsaver'],
            alt2: ['usdtime', 'usdsaver', 'cio']
          })
        }}
      />
      {/* Banner */}
      <div className="sc-ib-mortgages-bnr">
        <div className="sc-ib-mortgages-bnr__bg">
          <img
            className="sc-ib-mortgages-bnr__img"
            src="https://av.sc.com/sg/content/images/sg_ib-wealth_cn_page-680_274.jpg"
            alt="banner"
          />
        </div>
        <div className="sc-ib-mortgages-bnr__content sc-rte">
          <h2 className="sc-ib-mortgages-bnr__title">
            渣打新加坡专业财富管理方案，构建您的全球财富成长之旅
          </h2>
          <p className="sc-ib-mortgages-bnr__desc">
            依托全国网络，随时随地为您提供国际市场资讯及产品解决方案
          </p>
        </div>
      </div>
      {/* Contents */}
      <div className="sc-ib-mortgages-content__wrapper" data-query-name="order">
        <div className="sc-ib-mortgages-content" data-order-name="usdsaver">
          <div className="sc-ib-mortgages-content__bg">
            <img
              className="sc-ib-mortgages-content__img"
              src="https://av.sc.com/hk/content/images/hk-ng-sc-mobile-banking-masthead-new-1600-490.png"
              alt="banner"
            />
          </div>
          <div className="sc-ib-mortgages-content__box">
            <h2 className="sc-ib-mortgages-content__title">USD$aver存款</h2>
            <div className="sc-ib-mortgages-content__content sc-list sc-rte">
              <p>您可以以美元存款无所定期的赚取高达4.00%年利率</p>
              <ul>
                <li>在高达300万元美元的存款余额上享受高达年利率4.00%的利息</li>
                <li>
                  存入美元时<strong>无需支付佣金费用</strong>
                </li>
                <li>
                  随时<strong>灵活提取</strong>您的资金
                </li>
              </ul>
            </div>
            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a
                  href="https://retail.sc.com/scmobile/sg/?ngroute=communication-hub/my-rm&intcid=XXXX"
                  title="联系您的专属客户经理"
                  target="_blank"
                  rel="noreferrer"
                  className="sc-btn sc-btn--small"
                >
                  联系您的专属客户经理
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sc-ib-mortgages-content" data-order-name="usdtime">
          <div className="sc-ib-mortgages-content__bg">
            <img
              className="sc-ib-mortgages-content__img"
              src="https://av.sc.com/hk/content/images/hk-ng-sc-mobile-banking-masthead-new-1600-490.png"
              alt="banner"
            />
          </div>
          <div className="sc-ib-mortgages-content__box">
            <h2 className="sc-ib-mortgages-content__title">美元定期存款（USD Time Deposit)</h2>
            <div className="sc-ib-mortgages-content__content sc-list sc-rte">
              <p>让您的美元储蓄，享有更高的利息</p>
              <p>
                当您存入至少25，000美元的新资金时，尊享
                <strong>高达XX%的美元定期存款年化利率：</strong>
              </p>

              <p>美元定期存款：最低$5w美元，上限为$50w美元</p>
              <table>
                <thead>
                  <tr>
                    <th>促销利率</th>
                    <th>存款期限</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>每年7.28%</td>
                    <td>1个月</td>
                  </tr>
                  <tr>
                    <td>每年6.28%</td>
                    <td>3个月</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a
                  href="https://retail.sc.com/scmobile/sg/?ngroute=communication-hub/my-rm&intcid=XXXX"
                  title="联系您的专属客户经理"
                  target="_blank"
                  rel="noreferrer"
                  className="sc-btn sc-btn--small"
                >
                  联系您的专属客户经理
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sc-ib-mortgages-content" data-order-name="cio">
          <div className="sc-ib-mortgages-content__bg">
            <img
              className="sc-ib-mortgages-content__img"
              src="https://av.sc.com/hk/content/images/hk-ng-sc-mobile-banking-masthead-new-1600-490.png"
              alt="banner"
            />
          </div>
          <div className="sc-ib-mortgages-content__box">
            <h2 className="sc-ib-mortgages-content__title">CIO精选保守基金（产品风险等级2）</h2>
            <div className="sc-ib-mortgages-content__content sc-list sc-rte">
              <p>寻求透过资产增值及收益累积实现中长期的适度资本增长</p>
              <p>主要的特点：</p>

              <ul>
                <li>比定存更高的派息率:年化派息率高达5.25%.</li>
                <li>每日灵活交易:无锁定期限</li>
                <li>
                  稳定的投资收益:专注于布局优质的短久期固定收益资产、现金和货币市场基金投资组合。
                </li>
              </ul>
              <p>
                CIO精选基金系列是由渣打（新加坡）担任投资顾问，东方汇理资产管理担任基金管理人的一系列基金。该基金系列汇聚了渣打集团首席投资办公室立足全球视野的市场观点以及基金精选团队基于开放式平台优中选优的基金筛选框架，旨在为您提供一站式的全球资产配置的投资解决方案。
              </p>
            </div>
            <ul className="sc-inline-buttons">
              <li className="sc-inline-buttons__item">
                <a
                  href="https://retail.sc.com/scmobile/sg/?ngroute=communication-hub/my-rm&intcid=XXXX"
                  title="联系您的专属客户经理"
                  target="_blank"
                  rel="noreferrer"
                  className="sc-btn sc-btn--small"
                >
                  联系您的专属客户经理
                </a>
              </li>
              <li className="sc-inline-buttons__item">
                <a
                  href="https://doc.morningstar.com/LatestDoc.aspx?clientid=scbsingapore&key=f1c0a58119da874e&isin=LU2627318806&market=1474&language=446&documenttype=52&investmenttype=1"
                  target="_blank"
                  rel="noreferrer"
                  title="了解更多 "
                  className="sc-btn sc-btn--secondary sc-btn--secondary-blue sc-btn--small"
                >
                  了解更多
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Disclaimer */}
      <div className="sc-ib-mortgages-disclaimer sc-rte">
        <p>
          <strong>免责声明</strong>
        </p>
        <p>
          本文件仅作提供一般信息之用，不构成要约、建议或要约招揽以进行交易或采用任何套保、交易或投资策略，不预示任何汇率或价格可能的未来变动，也不陈述任何此类未来变动不会超过任何图示的范围。
        </p>

        <p>
          本文件不面向任何特定人士或特定类别人士，也未考虑任何人士的具体投资目标、财务状况或特殊需求。您应该就产品是否适合您征求持牌或豁免财务顾问的意见，并在充分考虑这些因素后再作出购买产品的承诺。如果您选择不向持牌或获豁免财务顾问寻求建议，您应仔细考虑此产品是否适合您。
        </p>
        <p>
          您对个人投资决策承担全部责任。本文件所涉及的产品/服务并非保本，您可能会损失全部或部分初始投资金额。本广告未经新加坡金融管理局审查。
        </p>
        <p>
          请勿通过电子邮件向渣打银行发送任何机密和/或重要信息，渣打银行对传输的任何信息的安全性或准确性不作任何声明或保证。如果您决定使用电子邮件与渣打银行沟通，渣打银行不对您因此遭受的任何损失或损害负责。
        </p>
        <p>
          在考虑本网站上的任何信息、回复电子邮件或向我们发送任何信息或材料以回应此邮件之前，请确保您已阅读并理解我们的隐私声明和重要法律声明网上条款和条件，可在渣打银行（新加坡）有限公司公共网站上查看这些信息。
        </p>
      </div>
    </>
  );
};
