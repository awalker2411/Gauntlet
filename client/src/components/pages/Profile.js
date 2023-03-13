import Figure from 'react-bootstrap/Figure';
import Brute from '../../assets/images/characters/Brute.png'

function FigureExample() {
    return (
        <Figure>
            <Figure.Caption
                style={{
                    color: 'white'
                }}
            >
                Brute
            </Figure.Caption>
            <Figure.Image
                width={500}
                height={180}
                alt="500x180"
                src={Brute}
            />
        </Figure>
    );
}

export default FigureExample;