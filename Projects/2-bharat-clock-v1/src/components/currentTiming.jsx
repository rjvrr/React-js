let Timing = () => {
  let time = new Date();

  return <p className = "lead">
    The current timing is: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
  </p>
}

export default Timing;