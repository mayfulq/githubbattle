import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';
import Loading from './Loading';

class SelectLang extends React.Component{
    render(){
        const languages=['All','JavaScript','Ruby','Java','CSS','Python'];
        return(
          <ul className="languages">
            {languages.map(lang => {
               return ( 
                   <li 
                    style={lang === this.props.selectedLang ? {color:'#d0021b'}:null}
                    onClick={this.props.onSelect.bind(null,lang)}
                    key={lang}>
                    {lang}
                </li>
                )
              }
            )}
           
           </ul>
        )
    }
}


function RepoGrid(props){
    return(
        <ul className="popular-list">
           {props.repos.map(function(repo,index){
            return(
                 <li className="popular-item" key={repo.name}>
                 <div className="popular-rank">{index + 1}</div>
                 <ul className="space-list-items">
                   <li>
                     <img 
                        className="avatar"
                        src={repo.owner.avatar_url} 
                        alt={"Avatar for" +repo.owner.login} />
                   </li>
                   <li><a href={repo.html_url}>{repo.name}</a></li>
                   <li>@{repo.owner.login}</li>
                   <li>{repo.stargazers_count} starts</li>
                 </ul>
               </li>
             )
            }   
           )}
        
        </ul>
    )
}

RepoGrid.propTypes={
    repos:PropTypes.array.isRequired,
}

SelectLang.propTypes={
    selectedLang:PropTypes.string.isRequired,
    onSelect:PropTypes.func.isRequired,
}





class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedLang:'All',
            repos:null
        }
        this.update=this.update.bind(this);
    }
    
    componentDidMount(){
       this.update(this.state.selectedLang);
    }

    update(lang){
        this.setState(function(){
            return{
                selectedLang:lang,
                repos:null
            }
        })

         api.fetchPopularRepos(lang)
         .then(function(repos){
             
             this.setState(()=>{
                 return {
                     repos
                 }
             })
         }.bind(this))
    }


    render(){
        return(
           <div>
                <SelectLang 
                  selectedLang={this.state.selectedLang}
                  onSelect={this.update}
                />
                {!this.state.repos
                 ? <Loading />
                 : <RepoGrid repos={this.state.repos}/>}
               
           </div>
        )
    }
}

export default Popular;