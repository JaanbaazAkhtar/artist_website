import React, {Component} from 'react';
import {connect} from 'react-redux';
import {artistsListAll, artistListSerach} from '../store/actions';
import {Link} from "react-router-dom";


class Home extends Component{

    componentDidMount(){
        this.props.dispatch(artistsListAll());
    }
    showArtistsAll = (data)=>{
        data ?
            data.map(item =>(
                <Link to={`/artist/${item.id}`} key={item.id} className="artist_item">
                    <div className="cover" style={{background:`url(/image/$item.cover)`}}>
                        <div>
                            {item.name}
                        </div>
                    </div>
                </Link>
            ))
            : null
    }

    getKeywords = (event)=>{
        let key = event.target.value;
        this.props.dispatch(artistListSerach(key))

    }

    render(){
        return(
            <>
                <div className="search_container">
                    <h2>Search your Artist</h2>
                    <input type="text"  onChange={event =>this.getKeywords(event)}/>
                </div>

                <div className="artist_container">
                    {this.showArtistsAll(this.props.artists.artistsList)}
                </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        artists:state.artists
}
}

export default connect(mapStateToProps)(Home);
