import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import OfferListItem from './OfferListItem';
/**
 * Displays OfferListItem components for offer details
 * @param {*} props 
 * @returns 
 */
const OfferList = (props) => {
    const history = useHistory();

    const [state, setstate] = useState(history && history.location.state);

    state.OffersRequests && console.log("offerList assign offer", typeof state.OffersRequests.assignOffer)
    return (
        <div>
            <h1>Offers list</h1>
            {state.requestOffer && state.requestOffer.map(offer => <OfferListItem {...offer} assignOffer={state.assignOffer}/>)}
        </div>
    )
}

export default OfferList
