const Ask = () => {
  return (
    <>
      <div className="box">
        <h1>Ask me :</h1>
        <form>
        <input placeholder="Ask me ?" />
        <button type="submit">Submit</button>

        </form>

        <div className="output-anwser"></div>
      </div>
    </>
  )
}

export default Ask
