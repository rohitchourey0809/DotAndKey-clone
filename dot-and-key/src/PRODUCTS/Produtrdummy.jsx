import React from 'react'
import { CategoryComponent } from './CataegoryCard'
import { Filtercomponent } from './filtercomponent'

export const Produtdummy = () => {
  return (
    <div>
      <Filtercomponent />
      <CategoryComponent categoryprop="skincare" />
      <CategoryComponent categoryprop="Moisturizer" />
      <CategoryComponent categoryprop="Clay Masks" />
      <CategoryComponent categoryprop="Clay Masks" />
      <CategoryComponent categoryprop="Clay Masks" />
    </div>
  );
}
