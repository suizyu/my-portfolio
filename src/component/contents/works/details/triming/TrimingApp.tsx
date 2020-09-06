import React from 'react';
import { Wh2, TopImage, MainTextDiv } from '../../../../common/detailComponents/DetailComponents';

const TrimmingApp = () => {
    const title = "プロトタイピング：トリミングアプリ";
    return(
        <>
            <h1>{title}</h1>
            <iframe style={{border:"1px solid rgba(0, 0, 0, 0.1)"}}
                width="350" 
                height="700" 
                src={"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbaPpS4zRLZWit6kl2V0Zrd%2F%25E9%25BB%2584%25E9%2587%2591%25E6%25AF%2594%25E3%2583%2588%25E3%2583%25AA%25E3%2583%259F%25E3%2583%25B3%25E3%2582%25B0%25E3%2582%25A2%25E3%2583%2597%25E3%2583%25AA-%25E5%2585%25AC%25E9%2596%258B%25E7%2594%25A8%3Fnode-id%3D128%253A9152%26scaling%3Dscale-down&chrome=DOCUMENTATION"} 
                allowFullScreen>
            </iframe>
            <dl>
                <dt><Wh2>Creation time</Wh2></dt>
                <dd><p>2020/02</p></dd>
                <dt><Wh2>Time breakdown</Wh2></dt>
                <dd>
                    <p>
                        アイディア出し：4時間<br/>
                        ターゲット、方向性検討：5時間<br/>
                        作成：9時間
                    </p>
                </dd>
                <dt><Wh2>Responsible for</Wh2></dt>
                <dd>
                    <ul>
                        <li>
                            プロトタイプ<br/>
                            (主に動作と関連する画面部分の個別化を担当)
                        </li>
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
                    お題：カメラ機能を使用したアプリ のもと作成した学校課題となります。<br/>
                    制作物：トリミングアプリ、ターゲット；写真初心者～中級者、撮影・編集をスマホで完結かつ簡単に行いたい層を想定して作成致しました。<br/>
                    内容としては、ターゲット層が写真の撮影段階で意識しづらいと考えられる黄金比などを手軽に参考にできるトリミングアプリを目指しました。<br/>
                </p>
                <p>
                    作成部分ではトリミング編集画面での、黄金比選択の動作（表示中の黄金比を選択で色変更、別の向きを選択で回転）で破綻が起きないように組むのが大変でした。<br/>
                    また、こちらの課題は私含めた3人のチーム全員の同時進行で作成をすすめたため、極力コンポーネント化をして出戻りを減らしたり、他画面担当者の作成作業を増やさないで進行することを強く意識させられました。<br/>
                </p>
                <p>
                    短期間で制作課題でしたがマインドマップ作成での意識共有もあって致命的な相違等を発生せず、上記の同時制作でスムーズなやりとりを行えたのもあり、普段の業務での情報共有の重要性をより実感いたしました。
                </p>
            </MainTextDiv>
        </>
    )
}

export default TrimmingApp;