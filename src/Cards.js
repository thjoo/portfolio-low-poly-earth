export default function Cards(props) {
    const link = props.link || 'www.google.ch';

    const clicker = (e) => {
        window.location.href = link;
    };
    const cardsData = [
        {
            id: 1,
            title: 'CARD 1',
            content:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
            imgUrl: 'https://unsplash.it/200/200',
        },
        {
            id: 2,
            title: 'CARD 2',
            content:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
            imgUrl: 'https://unsplash.it/201/200',
        },
        {
            id: 3,
            title: 'CARD 3',
            content:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
            imgUrl: 'https://unsplash.it/200/201',
        },
    ];

    return (
        <>
            <div className="point" onClick={clicker}>
                <div className="label">{props.title}</div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam
                </div>
            </div>
        </>
    );
}
