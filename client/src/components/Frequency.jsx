
export default function Frequency() {
  return (
    <div className="box">
      <p>
        How many times do you want to work out a week?
      </p>
      <select>
        <option value='one'>1</option>
        <option value='two'>2</option>
        <option value='three'>3</option>
      </select><br/>
      <button type='submit'>submit</button>
    </div>
  )
}