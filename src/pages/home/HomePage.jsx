import React, { useState } from 'react'

const HomePage = () => {

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [sum, setSum] = useState(null);

  const Sum = () => {
    setSum(Number(value1) + Number(value2));
  }

  return (
    <div>
      <h1 className='text-5xl font-bold text-center mt-7 text-sky-600'>HomePage</h1>
      <input onChange={e=>setValue1(e.target.value)} type="number" value={value1} name="" placeholder='Value a' id="" />
      <input onChange={e=>setValue2(e.target.value)} type="number" value={value2} name="" placeholder='Value b' id="" />
      <button className='bg-red-400 text-black px-2 py-3' onClick={Sum}>SUM = {sum}</button>
    </div>
  )
}

export default HomePage