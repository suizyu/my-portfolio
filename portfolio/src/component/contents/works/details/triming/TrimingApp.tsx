import React from 'react';
import { Wh2, TopImage, MainTextDiv } from '../../../../common/detailComponents/DetailComponents';

const TrimmingApp = () => {
    const title = "プロトタイピング：トリミングアプリ";
    return(
        <>
            <h1>{title}</h1>
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