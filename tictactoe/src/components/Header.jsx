import Cad from 'react-bootstrap/Card';

export default function Header(props) {
    return (
        <header className="myHeader">
            -Turn of {props.turn}
            <section className="card" style={{ maxWidth: '320px' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Cabecera</p>
                    <a href="#" className="btn-solid theme-primary">Go back</a>
                </div>
            </section>
        </header>
    );
}