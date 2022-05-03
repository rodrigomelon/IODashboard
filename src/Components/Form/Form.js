import { useState, useEffect } from 'react'
import Cards from './Cards/Cards'
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
  BsTrash
} from 'react-icons/bs'

function Form() {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  const [list, setList] = useState([])
  const [radio, setRadio] = useState('')
  const [somaIN, setSomaIN] = useState(0)
  const [somaOUT, setSomaOUT] = useState(0)
  const [balance, setBalance] = useState(0)

  const handleClick = e => {
    if (radio === '' || desc === '' || amount === '') {
      alert('INVALID INPUT')
      return
    }

    const newAmount = parseInt(amount, 10)
    const info = { id: Math.random(), desc, newAmount, radio }
    setList(prevState => [...list, info])
    setDesc('')
    setAmount('')
  }
  const handleDelete = id => {
    const filtrados = list.filter(list => list.id !== id)
    setList(filtrados)
  }

  useEffect(() => {
    const infilt = list.filter(obj => {
      return obj.radio === 'in'
    })

    const sumIN = infilt.reduce(function (prev, cur) {
      return prev + cur.newAmount
    }, 0)

    setSomaIN(sumIN)

    const outfilt = list.filter(obj => {
      return obj.radio === 'out'
    })

    const sumOUT = outfilt.reduce(function (prev, cur) {
      return prev + cur.newAmount
    }, 0)

    setSomaOUT(sumOUT)

    const bal = sumIN - sumOUT
    setBalance(bal)
  }, [list])
  return (
    <div className="">
      <div className="my-5">
        <Cards somaIN={somaIN} somaOUT={somaOUT} balance={balance} />
      </div>
      <div className="flex justify-center items-center flex-col sm:flex-row">
        <input
          className="p-1 text-zinc-800 rounded mb-1 sm:mr-2"
          type="text"
          placeholder="Description"
          onChange={e => setDesc(e.target.value)}
          value={desc}
        />
        <input
          className="p-1 text-zinc-800 rounded mb-1 sm:mr-2"
          type="number"
          placeholder="$$$"
          onChange={e => setAmount(e.target.value)}
          value={amount}
        />
        <div>
          <input
            className="accent-zinc-800 "
            type="radio"
            id="inid"
            name="inout"
            value="in"
            onChange={e => setRadio(e.target.value)}
          />
          <label className="text-slate-300 font-semibold ml-1">IN</label>
          <input
            className="ml-2 accent-zinc-800  "
            type="radio"
            id="outid"
            name="inout"
            value="out"
            onChange={e => setRadio(e.target.value)}
          />
          <label className="text-slate-300 font-semibold ml-1">OUT</label>
        </div>
      </div>
      <div className="flex justify-center mt-5 border-b-2 border-zinc-500">
        <button
          className="bg-slate-300 hover:bg-slate-500 text-zinc-800 font-bold py-2 px-4 rounded mb-5"
          onClick={handleClick}
        >
          ADD!
        </button>
      </div>
      <div className="">
        <div>
          {list.length === 0 && (
            <h1 className="text-slate-200 text-center mt-2">EMPYT LIST!</h1>
          )}
        </div>
        {list.map(item => (
          <div className="flex flex-col items-center" key={item.id}>
            <div className="flex justify-between items-center border-2 border-slate-300 rounded mt-3 mx-3 py-1 px-2 text-slate-200 w-5/6 sm:w-3/6">
              <div>
                <p>{item.desc}</p>
                <div className="flex items-center justify-between">
                  <p>${item.newAmount}</p>
                  {item.radio === 'in' && (
                    <BsFillArrowUpCircleFill color="green" />
                  )}
                  {item.radio === 'out' && (
                    <BsFillArrowDownCircleFill color="#FE2E2E" />
                  )}
                </div>
              </div>
              <BsTrash onClick={() => handleDelete(item.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Form
