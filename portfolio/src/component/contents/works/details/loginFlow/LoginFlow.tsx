import React from 'react';
import { Wh2, TopImage, MainTextDiv } from '../../../../common/detailComponents/DetailComponents';

const SignUpFlow = () => {
    const title = "プロトタイピング：サインアップフロー";
    return(
        <>
            <h1>{title}</h1>
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