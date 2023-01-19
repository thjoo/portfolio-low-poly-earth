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
            <div className="footer">
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
            </div>
        </div>
    </>
);
