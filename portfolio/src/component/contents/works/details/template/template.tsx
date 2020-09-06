import React from 'react';
import { Wh2, MainTextDiv } from '../../../../common/detailComponents/DetailComponents';

const Template = () => {
    const title = "プロトタイピング：トリミングアプリ";
    return(
        <>
            <h1>{title}</h1>
            <dl>
                <dt><Wh2>Creation time</Wh2></dt>
                <dd><p>作成期間</p></dd>
                <dt><Wh2>Time breakdown</Wh2></dt>
                <dd>
                    <p>
                        時間内訳
                    </p>
                </dd>
                <dt><Wh2>Responsible for</Wh2></dt>
                <dd>
                    <ul>
                        <li>
                            担当
                        </li>
                    </ul>
                </dd>
                <dt><Wh2>Tool</Wh2></dt>
                <dd>
                    <ul>
                        <li>ツール欄</li>
                    </ul>
                </dd>
            </dl>
            <MainTextDiv>
                <p>
                </p>
            </MainTextDiv>
        </>
    );
}

export default Template;