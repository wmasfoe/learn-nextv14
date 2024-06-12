const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function Page({ params }) {
  await sleep(2000)
  return <div>
    这是 parallel @team 页面
  </div>
}