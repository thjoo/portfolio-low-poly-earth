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
            <div className="socials">
                <SocialIcon
                    style={{
                        width: '2rem',
                        height: '2rem',
                        pointerEvents: 'all',
                    }}
                    url="https://www.linkedin.com/in/thierry-joerin-076a95132/"
                    bgColor="#ffffff95"
                />
                <SocialIcon
                    style={{
                        width: '2rem',
                        height: '2rem',
                        pointerEvents: 'all',
                    }}
                    url="https://github.com/thjoo"
                    bgColor="#ffffff95"
                />
                <SocialIcon
                    style={{
                        width: '2rem',
                        height: '2rem',
                        pointerEvents: 'all',
                    }}
                    url="https://www.youtube.com/channel/UCF9EAzk0rGuU2j9KUgU5jDg"
                    bgColor="#ffffff95"
                />
                <SocialIcon
                    style={{
                        width: '2rem',
                        height: '2rem',
                        pointerEvents: 'all',
                    }}
                    url="https://www.reddit.com/user/thjo3d"
                    bgColor="#ffffff95"
                />
                <SocialIcon
                    style={{
                        width: '2rem',
                        height: '2rem',
                        pointerEvents: 'all',
                    }}
                    url="https://twitter.com/JoerinThierry"
                    bgColor="#ffffff95"
                />
            </div>

            <h2 className="title-left">current.projects</h2>

            <div className="container left">
                <Cards title={1}></Cards>
                <Cards title={2} link={'www.host.ch'}></Cards>
                <Cards title={4}></Cards>
                <Cards title={4}></Cards>
            </div>

            <h2 className="title-right">old.projects</h2>

            <div className="container right">
                <Cards title={1}></Cards>
                <Cards title={2} link={'www.host.ch'}></Cards>
                <Cards title={4}></Cards>
            </div>
        </div>
    </>
);
