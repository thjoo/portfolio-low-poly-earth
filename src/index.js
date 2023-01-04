import './style.css';
import ReactDOM from 'react-dom/client';
import { SocialIcon } from 'react-social-icons';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <>
        <App />
        <div className="bg" />
        <h1>
            Learn <span style={{ fontSize: '0.4em' }}>with</span>
            <br />
            <span>Thierry</span>
        </h1>
        <SocialIcon
            style={{
                position: 'absolute',
                top: 40,
                right: 60,
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
                right: 60,
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
                right: 60,
                width: 30,
                height: 30,
            }}
            url="https://www.youtube.com/channel/UCF9EAzk0rGuU2j9KUgU5jDg"
            bgColor="#ffffff"
        />
        <h2 className="title-left">Current.projects</h2>

        <div className="capsule">
            <div className="current-project">Project1</div>
            <div className="current-project">Project2</div>
            <div className="current-project">Project3</div>
            <div className="current-project">Project4</div>
        </div>

        <h2 className="title-right">Old.projects</h2>

        <div className="capsule-done">
            <div className="old-project">Project1</div>
            <div className="old-project">Project2</div>
            <div className="old-project">Project3</div>
            <div className="old-project">Project4</div>
        </div>
    </>
);
