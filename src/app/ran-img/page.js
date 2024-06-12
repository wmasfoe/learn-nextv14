const sleep = (ms) => new Promise(r => setTimeout(r, ms))

export default async function Page({ params }) {
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  const data = (await res.json())?.[0]
  console.log('data === ', data)
  return <div style={{width: '100px', height: '100px'}}>
    <span>hello</span>
    <img src={data?.url} alt="img"></img>
  </div>
}