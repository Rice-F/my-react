function Dialog (props) {
  return <div style={{ border: '4px solid red' }}>{props.children}</div>
}

function WelcomeDialog () {
  return (
    <Dialog>
      <h1>welcome</h1>
      <p>感谢使用</p>
    </Dialog>
  )
}

export default function () {
  return <WelcomeDialog></WelcomeDialog>
}