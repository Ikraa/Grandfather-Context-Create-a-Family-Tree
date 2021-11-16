import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const { house, ornaments } = props;
    return (
        <div>
            <h1>Grand Father</h1>
            <h4>House: {house}</h4>
            <div style={{ display: "flex" }}>
                <Father house={house} ornaments={ornaments}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default GrandFather;