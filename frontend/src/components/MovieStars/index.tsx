import { ReactComponent as StarFull } from 'assets/img/star-full.svg';
import { ReactComponent as StarHalf } from 'assets/img/star-half.svg';
import { ReactComponent as StarEmpyt } from 'assets/img/star-empyt.svg';
import './styles.css';

function MovieStars() {
    return (
    <div className="dsmovie-stars-container">
  <StarFull />
  <StarFull />
  <StarFull />
  <StarHalf />
  <StarEmpyt />
</div>

);
}

export default MovieStars;

