import React from 'react';
import CollectionBanner from '../components/CollectionBanner';

import ShowBrand from '../components/ShowBrand';

function Collections() {
  return (
<div className="w-full bg-[#f8f0ef] min-h-screen p-3 sm:p-10 md:p-0 border">
  <CollectionBanner />
 
  <ShowBrand />
</div>
  );
}

export default Collections;
