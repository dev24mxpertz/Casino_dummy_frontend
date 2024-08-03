    import React, { useState, useEffect } from 'react';
    import Roulette from '../../Assets/Image/Roulette.png'
    import Blackjack from '../../Assets/Image/Blackjack.png'
    import Slot from '../../Assets/Image/Slot.png'
    import Aviator from '../../Assets/images/aviator-game.png'
    import Hunt from '../../Assets/images/Hunt-Ace.png'
    import { Flex, Radio } from 'antd';
    import { useNavigate } from 'react-router-dom';

    const Card = ({ title, backgroundImage, onClick }) => {
        const imagePaths = {
            Roulette: Roulette,
            Blackjack: Blackjack,
            Slot: Slot,
            Aviator: Aviator,
            Hunt: Hunt
        };

        return (
            <div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}onClick={onClick}>
                <div className="card-content">
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <img className='img-fluid game-card-image card-img-upper' style={{ width: 'fit-content' }} src={imagePaths[title]} alt="" />
                        <h3 className='card-heading'>{title}</h3>
                        <img class="d-none d-md-block" style={{ width: 'fit-content' }} src={require('../../Assets/Icon/csinos logo 2.png')} alt="" />
                    </div>
                </div>
            </div>
        );
    };

    const cardsData = [
        { id: 1, title: 'Roulette', backgroundImage: '../../Assets/Image/Card.png', route: '/Rouleta' },
        { id: 2, title: 'Blackjack', backgroundImage: 'url-to-image-1.jpg', route: '/blackjack' },
        { id: 3, title: 'Slot', backgroundImage: 'url-to-image-1.jpg', route: '/slot'},
        { id: 4, title: 'Aviator', backgroundImage: 'url-to-image-1.jpg', route: '/Aviator'},
        { id: 5, title: 'Hunt', backgroundImage: 'url-to-image-1.jpg', route: '/Hunt'},
    ];

    const Casinosection1 = () => {
        const [filter, setFilter] = useState('all');
        const navigate = useNavigate();

        const handleFilterChange = (filterValue) => {
            setFilter(filterValue);
        };
        

        useEffect(() => {
            document.getElementById(filter).classList.add('active');
        }, [filter]);

        const filteredCards = filter === 'all' ? cardsData : cardsData.filter(card => card.title.toLowerCase().includes(filter.toLowerCase()));

        return (
            <div className="casino-s1">
                <div>
                    <h1 className='casino-s1-heading'>Games casino</h1>
                </div>
                <div className="d-flex justify-content-center w-100">
                    <Radio.Group defaultValue="a" buttonStyle="solid" className="filter-btns">
                        <div className="row w-100">
                            <div className='casino-radio-group col-md-6 col-sm-3 col-6'>
                                <Radio.Button value={"a"} id="all" style={{ width: '100%', height: '55px', borderInlineStart: 'none', display: 'flex' }} className={`casino-mobile-btn blue-btn ${filter === 'all' ? 'radio-active' : ''} `} onClick={() => handleFilterChange('all')}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='radio-icon' src={require('../../Assets/Icon/All-bet-logo.png')} alt="" />
                                        <h6 className='radio-test'>All Games</h6>
                                    </div>
                                </Radio.Button>
                            </div>
                            <div className='casino-radio-group col-md-6 col-sm-3 col-6'>
                                <Radio.Button value={"b"} id="Roulette" style={{ width: '100%', height: '55px', borderInlineStart: 'none' }} className={`casino-mobile-btn blue-btn ${filter === 'Roulette' ? 'radio-active' : ''}`} onClick={() => handleFilterChange('Roulette')}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='radio-icon' src={require('../../Assets/Icon/Big-bet-logo.png')} alt="" />
                                        <h6 className='radio-test'>Roulette</h6>
                                    </div>
                                </Radio.Button>
                            </div>
                            <div className='casino-radio-group col-md-6 col-sm-3 col-6'>
                                <Radio.Button value={"c"} id="Blackjack" style={{ width: '100%', height: '55px', borderInlineStart: 'none' }} className={`casino-mobile-btn blue-btn ${filter === 'Blackjack' ? 'radio-active' : ''}`} onClick={() => handleFilterChange('Blackjack')}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='radio-icon' src={require('../../Assets/Icon/card-logo.png')} alt="" />
                                        <h6 className='radio-test'>Blackjack</h6>
                                    </div>
                                </Radio.Button>
                            </div>
                            <div className='casino-radio-group col-md-6 col-sm-3 col-6'>
                                <Radio.Button value={"d"} id="Slot" style={{ width: '100%', height: '55px', borderInlineStart: 'none' }} className={`casino-mobile-btn blue-btn ${filter === 'Slot' ? 'radio-active' : ''}`} onClick={() => handleFilterChange('Slot')}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='radio-icon' src={require('../../Assets/Icon/slot-machine.png')} alt="" />
                                        <h6 className='radio-test'>Slot</h6>
                                    </div>
                                </Radio.Button>
                            </div>
                        </div>
                    </Radio.Group>
                </div>
                <div className="card-container">
                    {filteredCards.map(card => (
                        <div key={card.id} onClick={() =>  navigate(card.route)}>
                            <Card {...card} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default Casinosection1;

