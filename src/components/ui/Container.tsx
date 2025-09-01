import * as React from 'react'
// Container component for consistent horizontal padding and centering
export type ContainerProps = React.HTMLAttributes<HTMLDivElement>
// Accepts all standard div attributes, including className and children
export function Container({ className = '', ...props }: ContainerProps) {
  return <div className={`container ${className}`} {...props} />
}
// Uses Tailwind CSS 'container' class for responsive design
// Additional classes can be passed via className prop
// Children elements are rendered inside the container
