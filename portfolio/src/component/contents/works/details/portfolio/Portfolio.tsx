import React from 'react';
import { Wh2, TopImage, MainTextDiv } from '../../../../common/detailComponents/DetailComponents';

const PortfolioWork = () => {
    const title = "ポートフォリオサイト";
    return(
        <>
            <h1>{title}</h1>
            <dl>
                <dt><Wh2>Creation time</Wh2></dt>
                <dd><p>2020/07 ~ 2020/09</p></dd>
                <dt><Wh2>Time breakdown</Wh2></dt>
                <dd>
                    <p>
                        サイトデザイン：3時間<br/>
                        作成：約2ヶ月
                    </p>
                </dd>
                <dt><Wh2>Technology and Tools</Wh2></dt>
                <dd>
                    <ul>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Figma</li>
                    </ul>
                </dd>
            </dl>
            <MainTextDiv>
                <p>
                    当サイトです。 
                    現在業務で利用しているTypeScript、5~6月に自主勉強をおこなったReactの習作を兼ねた制作となります。<br/>
                    <a href="https://github.com/suizyu/my-portfolio" target="_blank">ソースはこちら（github）</a>
                </p>
                <p>
                    当初の予定では、背景にThree.jsを使用、レスポンシヴ対応を目指しておりましたが制作期間の長引きのため断念。<br/>
                    今後の更新での対応を目指してゆきます。
                </p>
                <p>
                    サイトデザインはFigmaで組みましたが、メニュー位置等の変更とそれに伴う修正時間の増加があったため、今後はデザイン段階での構成を詰めていく意識の必要性を強く感じました。<br/>
                    Worksのサムネイルやメニュー項目等のクリックで画面に変化を起こす要素には、極力アニメーションをつけることで閲覧者へのアピールを強める意図のもと作成した要素です。<br/>
                    （SNSアイコン、メニュー項目はcss, フェードインはreact-springを使用） <br/>
                    この点は、UI/UXの学習を始める前は意識していなかった点であるため、自身の中で進歩を感じられております。<br/>
                </p>
            </MainTextDiv>
        </>
    )
}

export default PortfolioWork;