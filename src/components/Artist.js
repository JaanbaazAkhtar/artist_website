import React, {Component} from 'react';
import {connect} from 'react-redux';
import { artistDetail} from '../store/actions'
import {Link} from 'react-router-dom';

class Artist extends Component{

    componentDidMount(){
        this.props.dispatch(artistDetail(this.props.match.params.id))
    }
    artistTemplate = (data)=>(
        data.artistData ?
            <div className="artist_view">
                <div className="artist_background" style={{background:`url(/images/${data.artistData[0].cover})`}}>
                    <Link to="/">
                        Back Home
                    </Link>
                    <div className="name">{data.artistData[0].name}</div>
                </div>
                <div className="artist_description">
                    <p>{data.artistData[0].bio}</p>
                    <div className="tags">
                        <div>
                            <strong>Style:</strong>{data.artistData[0].style}
                        </div>
                    </div>
                </div>
                <div className="artist_album_list">
                    {
                        data.artistData[0].albums ?
                            data.artistData[0].albums.map(item =>(
                                <div key={item.cover} className="albums">
                                    <div className="cover" style={{background:`url(/images/albums/${item.cover})`}}>
                                    </div>
                                </div>
                            ))
                        :null
                    }
                </div>
            </div>
        :null
    )
    render(){
        return(
            <>
                <div>
                    {this.artistTemplate(this.props.artists)}
                </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        artists: state.artists
    }
}
export default connect(mapStateToProps)(Artist);