interface ListItemProps {
  linkName: string,
  linkRef: string,
  variant?: 'normal' | 'booking'
}

export function ListItem({ linkName, linkRef, variant = 'normal' }: ListItemProps){
  return (
    <>
      {
        variant === 'normal' ?
        (
          <li className="text-brown-700 text-2xl"> <a href={linkRef}>{linkName}</a> </li>
        ) :
        (
          <li className="bg-brown-700 text-2xl text-beige-100 py-[6px] px-3"> <a href={linkRef}>{linkName}</a> </li>
        )
      }
    
    </>
  )
}