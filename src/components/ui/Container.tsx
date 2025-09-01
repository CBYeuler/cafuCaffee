import * as React from 'react'

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export function Container({ className = '', ...props }: ContainerProps) {
  return <div className={`container ${className}`} {...props} />
}
