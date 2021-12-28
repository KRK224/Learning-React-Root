import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import ReactMarkdown from 'react-markdown';

export default function RepositoryReadme({repo, login}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [markdown, setMarkdown] = useState("");

  const loadReadme = useCallback(async (login, repo) =>{
    setLoading(true);
    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
    const {download_url} = await fetch(uri).then(res => res.json());
    // console.log(download_url);
    const markdown = await fetch(download_url).then(res => res.text());
    // console.log(markdown);
    setMarkdown(markdown);
    setLoading(false);
  }, []);

  useEffect(()=>{
    console.log(`${repo} & ${login}`);
    if(!repo || !login) return;
    console.log('markdown readme loading...')
    loadReadme(login, repo).catch(setError);
  }, [repo]);

  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if(loading) return <p>Loading...</p>;

  return (
    <>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  )
}