import React, { memo, useState } from 'react';
import {AddProductToWhitelistProps} from './AddProductToWhitelist'
import dynamic from 'next/dynamic';
import lodash from 'lodash';

// import { AddProductToWhitelist } from './AddProductToWhitelist';

const AddProductToWhitelist = dynamic<AddProductToWhitelistProps>(() => {
  return import('./AddProductToWhitelist').then(mod => mod.AddProductToWhitelist)
}, {
  loading: () => <span>Carregando....</span>
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>

      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos Favoritos</button>

      {isAddingToWishlist && (
        <AddProductToWhitelist
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}

    </div>
  )
}


export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.product, nextProps.product)
})