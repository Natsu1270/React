import React from 'react'
import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className="shoppage">
                <h1>Shop page</h1>
                {
                    collections.map(({ id, title, ...otherProps }) => (
                        <CollectionPreview key={id} title={title} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage