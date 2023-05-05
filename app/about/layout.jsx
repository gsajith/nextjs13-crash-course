import React from 'react'

export const metadata = {
  title: 'About page',
}

const AboutLayout = ({ children }) => {
  return (<div>
    <h1>This is the about layout</h1>
    {children}
  </div>);
}

export default AboutLayout;
