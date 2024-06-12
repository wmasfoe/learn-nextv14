const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function Page({ params }) {
  await sleep(1000)
  return <div>
    这是 parallel analytics 页面
  </div>
}