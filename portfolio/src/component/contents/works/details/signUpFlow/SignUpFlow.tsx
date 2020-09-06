import React from 'react';
import { Wh2, MainTextDiv } from '../../../../common/detailComponents/DetailComponents';

const SignUpFlow = () => {
    const title = "プロトタイピング：サインアップフロー";
    return(
        <>
            <h1>{title}</h1>
            <iframe style={{border:"1px solid rgba(0, 0, 0, 0.1)"}}
                width="350" 
                height="700" 
                src={"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fdvma6SBInItX80sfAoMUxr%2F%25E3%2582%25B5%25E3%2582%25A4%25E3%2583%25B3%25E3%2582%25A2%25E3%2583%2583%25E3%2583%2597%25E3%2583%2595%25E3%2583%25AD%25E3%2583%25BC-%25E5%2585%25AC%25E9%2596%258B%25E7%2594%25A8%3Fnode-id%3D47%253A2%26scaling%3Dscale-down&chrome=DOCUMENTATION"}
                allowFullScreen>
            </iframe>
            <dl>
                <dt><Wh2>Creation time</Wh2></dt>
                <dd><p>2019/10 ~ 2019/12</p></dd>
                <dt><Wh2>Responsible for</Wh2></dt>
                <dd>
                    <ul>
                        <li>スタイルガイド</li>
                        <li>画面作成</li>
                        <li>プロトタイプ</li>
                    </ul>
                </dd>
                <dt><Wh2>Tool</Wh2></dt>
                <dd>
                    <ul>
                        <li>Figma</li>
                    </ul>
                </dd>
            </dl>
            <MainTextDiv>
                <p>
                    お題：サインアップフロー、条件；サインアップ画面およびサインアウトまでの画面 のもと作成した学校課題となります。<br/>
                    制作物は電動キックスケーターのレンタルアプリを想定し、作成しました。<br/>
                    スタイルガイドは余白が少なく見づらい点、サインアップフローはシンプルさに固執してしまい寂しさが出てしまったのが反省点です。<br/>
                </p>
                <p>
                    作成時に気にかけた点は、動作を仮の物だからで妥協せず、再現できる汎用的な動きの再現に努めたことです。<br/>
                    見返してみると、一部の配置ずれや同じ処理の画面遷移アニメーションが異なっている点が心残りですが、 
                    画面関連の作成は一人で行ったためFigmaの機能理解を深めるのに大変勉強になりました。
                </p>
            </MainTextDiv>
        </>
    );
}

export default SignUpFlow;