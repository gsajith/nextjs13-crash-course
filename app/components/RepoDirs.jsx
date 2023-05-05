import Link from 'next/link';
import React from 'react'

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait 1 second
  const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`, {
    next: {
      revalidate: 60
    }
  });
  const contents = await response.json();

  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === 'dir')
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => <li key={dir.path}>
          <Link href="">
            {dir.path}
          </Link>
        </li>)}
      </ul>
    </>
  );
}

export default RepoDirs;
