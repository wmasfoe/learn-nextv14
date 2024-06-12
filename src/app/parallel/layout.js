export default function Layout({ children, team, analytics }) {
  return <div style={{margin: ' 50px 100px'}}>
    <h1>这是 parallel layout</h1>
    <div>
      children: {children}
    </div>
    <div>
      team: {team}
    </div>
    <div>
      analytics: {analytics}
    </div>
  </div>
}