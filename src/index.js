import './style.css';
import ReactDOM from 'react-dom/client';
import { SocialIcon } from 'react-social-icons';
import App from './App';
import Cards from './Cards';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <>
        <App />
        <div className="wrapper">
            <h1>
                Create <span style={{ fontSize: '0.4em' }}>with</span>
                <br />
                <span>Thierry</span>
            </h1>
            <SocialIcon
                style={{
                    position: 'absolute',
                    top: 40,
                    right: 0,
                    width: 30,
                    height: 30,
                }}
                url="https://www.linkedin.com/in/thierry-joerin-076a95132/"
                bgColor="#ffffff"
            />
            <SocialIcon
                style={{
                    position: 'absolute',
                    top: 80,
                    right: 0,
                    width: 30,
                    height: 30,
                }}
                url="https://github.com/thjoo"
                bgColor="#ffffff"
            />
            <SocialIcon
                style={{
                    position: 'absolute',
                    top: 120,
                    right: 0,
                    width: 30,
                    height: 30,
                }}
                url="https://www.youtube.com/channel/UCF9EAzk0rGuU2j9KUgU5jDg"
                bgColor="#ffffff"
            />

            <h2 className="title-left">Current.projects</h2>

            <div className="container">
                <div className="point point-0">
                    <div className="label">1</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam
                    </div>
                </div>
                <div className="point point-0">
                    <div className="label">2</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam
                    </div>
                </div>
                <div className="point point-0">
                    <div className="label">3</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam
                    </div>
                </div>
                <div className="point point-0">
                    <div className="label">4</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam
                    </div>
                </div>
                <div className="point point-0">
                    <div className="label">5</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam
                    </div>
                </div>
            </div>

            {/* <div className="container archive">
            <h2 className="title-right">Old.projects</h2>
            <div className="archive project">Project1</div>
            <div className="archive project">Project2</div>
            <div className="archive project">Project3</div>
            <div className="archive project">Project4</div>
        </div> */}
        </div>
    </>
);
