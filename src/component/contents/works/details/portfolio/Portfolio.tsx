import React from 'react';
import { Wh2, MainTextDiv } from '../../../../common/detailComponents/DetailComponents';

const PortfolioWork = () => {
    const title = "ポートフォリオサイト";
    return(
        <>
            <h1>{title}</h1>
            <iframe style={{border:" 1px solid rgba(0, 0, 0, 0.1)"}} 
                width="45%" 
                height="450" 
                src={"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJNZFcxkjlIh9cD4aHqMaN8%2FUntitled%3Fnode-id%3D0%253A1&chrome=DOCUMENTATION"}
                allowFullScreen>
            </iframe>
            <iframe style={{border:" 1px solid rgba(0, 0, 0, 0.1)"}} 
                width="45%" 
                height="450" 
                src={"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FjzSyl6IMISaBweBTGyHRTr%2F%25E3%2582%25B5%25E3%2582%25A4%25E3%2583%2588%25E3%2583%2587%25E3%2582%25B6%25E3%2582%25A4%25E3%2583%25B3-%25E5%2585%25AC%25E9%2596%258B%25E7%2594%25A8%3Fnode-id%3D3%253A2&chrome=DOCUMENTATION"}
                allowFullScreen>
            </iframe>
            <p>(左)サイトデザイン (右)メニュー配置案</p>
            <dl>
                <dt><Wh2>Creation time</Wh2></dt>
                <dd><p>2020/06 ~ 2020/09</p></dd>
                <dt><Wh2>Time breakdown</Wh2></dt>
                <dd>
                    <p>
                        サイトデザイン：3時間<br/>
                        テストコンポーネント実装：1ヶ月 <br/>
                        作成：2ヶ月
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
                    現在業務で利用しているTypeScript、3~5月に自主勉強をおこなったReactの習作を兼ねた制作となります。<br/>
                    <a href="https://github.com/suizyu/my-portfolio" target="_blank">ソースはこちら（github）</a>
                </p>
                <p>
                    当初の予定では、背景にThree.jsを使用、レスポンシブ対応を目指しておりましたが制作期間の長引きのため断念。<br/>
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