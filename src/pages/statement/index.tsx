import React from 'react';
import { Card } from 'antd';

import styles from './index.less';

export default () => {
  return (
    <div>
      <Card title="声明">
        <article className={styles.articleWrap}>
          <blockquote>
            <p>
              <span>
                Oops追剧网提醒您：在浏览Oops.pub前，请您务必仔细阅读并透彻理解本声明。您可以选择不浏览本网站，但如果您浏览Oops追剧网，您的行为将被视为对本声明全部内容的认可。
              </span>
            </p>
          </blockquote>
          <p>
            Oops追剧网不提供任何视听上传服务，所有内容均来自视频分享站点所提供的公开引用资源，所有视频及图文版权均归原作者及其网站所有。本站将竭尽所能注明资源来源，但由于互联网转载的不可预性，无法确认所有内容的版权所有人。若原作者对本站所载视频作品版权的归属存有异议，请联系Oopszhuiju@gmail.com，我们将在第一时间予以处理。
          </p>
          <p>
            任何存在于Oops追剧网上的视频、图文资料均从网络收集所得，不代表Oops追剧网网站立场。您可能从这些视频、图文资料上获得资讯，Oops追剧网对其合法性概不负责，亦不承担任何法律责任。
          </p>
          <p>
            您应该对浏览使用Oops追剧网一切服务自行承担风险。我们不做任何形式的保证：不保证站内搜索结果满足您的要求，不保证网站服务不中断，不保证视频及图文资源的安全性、正确性、及时性、合法性。因网络状况、通讯线路、第三方网站等任何原因而导致您不能正常使用Oops追剧网，Oops追剧网不承担任何法律责任。
          </p>
          <p>
            Oops追剧网尊重并保护所有使用Oops追剧网用户的个人隐私权，您注册的用户名、电子邮件地址等个人资料，非经您亲自许可或根据相关法律、法规的强制性规定，Oops追剧网不会主动地泄露给第三方。
          </p>
          <p>
            任何单位或个人认为通过Oops追剧网提供的内容可能涉嫌侵犯其信息网络传播权，应该及时向Oops追剧网提出书面权利通知，并提供身份证明、权属证明及详细侵权情况证明。Oops追剧网在收到上述法律文件后，将会依法尽快断开相关链接内容。
          </p>
          <p>
            Oops追剧网一切资源仅为学习交流娱乐所用，请在下载后24小时内删除，未经版权许可，任何单位或个人不得将本站内容或服务用于商业目的。
          </p>
          <p>&nbsp;</p>
          <h4>
            <strong>联系我们：</strong>
          </h4>
          <p>联系邮箱：oopszhuiju@gmail.com</p>
        </article>
      </Card>
    </div>
  );
};
