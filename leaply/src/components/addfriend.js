import '../styles/addfriend.scss';
import { Link } from 'react-router-dom';

const Add = () => {
    return (
        <div className="container addfriend">
            <div className="row"></div>
                <div className="row">
                    <div className="col s12">
                            ADD FRIEND
                    </div>
                </div>

                <div className="middle center">
            
                </div>

                <div className="row">
                    <div className="col s4 offset-s4 center white-text">
                        
                            <Link to="addfriend" className="btn-floating btn-large blue waves-effect waves-light left">
                                <i className="large material-icons">add</i>
                            </Link>
                            <Link to="home" className="btn-floating btn-large blue waves-effect waves-light center">
                                <i className="large material-icons">map</i>
                            </Link>
                            <Link to="profile" className="btn-floating btn-large blue waves-effect waves-light right">
                                <i className="large material-icons">account_circle</i>
                            </Link>
                    </div>
                </div>
        </div>
    )
}

export default Add

