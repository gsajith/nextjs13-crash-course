import React, { Suspense } from 'react'

const fetchFromServer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait 3 seconds
  const response = await fetch(`${process.env.PUBLIC_API_BASE_URL}/api/hello`);
  return await response.text();
}

const ServerResponseComponent = async ({ }) => {
  const responseFromServer = await fetchFromServer();
  return <>{responseFromServer}</>
}

const Page = async ({ }) => {
  return (
    <div className="repos-container">
      <div>
        Got the following from server: <br />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ServerResponseComponent />
      </Suspense>
    </div>);
}

export default Page;
