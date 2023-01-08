export default function Cards() {
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

    return <CardContainer cards={cardsData} />;
}
