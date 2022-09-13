import WujieReact from 'wujie-react'
export default function VueSub () {
  const url = '//localhost:5173/'
  return (
    <div>
      <WujieReact
        name="vue_sub"
        url={url}
        sync={true}
      />
    </div>
  )
}