import React from 'react'
import Icon from '../../atoms/icon/Icon'
import H6 from '../../atoms/h6/H6'

export default function ContactInfo() {
  return (<>
        <div className="flex gap-6 flex-wrap">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <Icon name="phone" />
            <H6>(225)555-0118</H6>
          </div>
  
          <div className="flex items-center gap-1">
            <Icon name="email" />
            <H6 className="break-all">michelle.rivera@example.com</H6>
          </div>
        </div>
  </>
  )
}
