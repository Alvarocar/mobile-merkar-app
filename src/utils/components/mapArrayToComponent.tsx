import React, { useMemo } from "react"
import { isUndefined } from 'lodash'
import EmptyComponent from "./emptyComponent"


export const mapArrayToComponent = (ItemComponent: React.FC, items?: Object[], Wrapper?: React.FC): React.FC => {
  return () => {
    const itemsToRender = useMemo(() => isUndefined(items) ? [] : items, [items])
    const FinalWrapper = isUndefined(Wrapper) ? EmptyComponent : Wrapper
    return <FinalWrapper>{itemsToRender.map((item, i) => <ItemComponent key={i} {...item} />)}</FinalWrapper>
  }
}
