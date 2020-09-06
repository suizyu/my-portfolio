import React from 'react';
import Title from '../../common/fadeInTitle/FadeInTitle';
import ScrollWrap from '../../common/scrollWrap/ScrollWrap';
import style from './skills.module.css';
import webSkill from './skillsData/webSkills.json';
import programmingSkills from './skillsData/programming.json';
import othersSkills from './skillsData/others.json';

interface PathProps {
    to: string
}

interface Details {
    name: string
    proficiency: number
}

interface DataSet {
    category: string
    details: Details[]
}

interface GenerateProps {
    dataset: DataSet
}

class Category extends React.Component<GenerateProps> {
    Stars(rank: number) {
        const starts = [];
        for(var i = 0; i < 5; i++) {
            starts.push( i < rank ? "★" : "☆");
        }

        return(<span>{starts}</span>);
    }
    
    skillsRank(skillDetails: Details[]) {
        if(!skillDetails){
            return;
        }

        const detailRows = skillDetails.map((data, i) =>
            <tr key={i}>
                <td className={style.name}>{data.name}</td>
                <td className={style.rank}>{this.Stars(data.proficiency)}</td>
            </tr>
        );
        
        return(detailRows);
    }

    render() {
        return (
            <div className={style.category}>
                <h2>{this.props.dataset.category}</h2>
                <table>
                   <tbody>
                       {this.skillsRank(this.props.dataset.details)}
                   </tbody>
                </table>
            </div>
        );
    }
}

class Skills extends React.Component<PathProps> {
    render(){
        return (
            <ScrollWrap to={this.props.to}>
                <Title>Skills</Title>
                <Category dataset={webSkill}/>
                <Category dataset={programmingSkills}/>
                <Category dataset={othersSkills}/>
            </ScrollWrap>
        );
    }
}

export default Skills;