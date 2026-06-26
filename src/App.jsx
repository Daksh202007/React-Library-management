import AddBook from './component/AddBook'
import Navbar from './component/Navbar'
import TableRecord from './component/TableRecord'
import TotalBook from './component/TotalBook'
import { useEffect, useState } from 'react'

function App() {

  const [book ,setBook]=useState([])
  const [data , setData]=useState({})
  const total = book.length
  const date = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric"
});


  
  // const handleBook=(e)=>{
  
  //   setBook([...book ,
  //     ...data
    
  //   ])
  // setData({})
  // }


    const handleData = (e)=>{
      setData(prev=>({
        ...prev,
        ...e
      }))
    }

    const handleDataSubmit = (forms)=>{
      const form = {...forms , date:date, issued: false}
      setBook(prev=>[...prev, form])
      setData({})
      
    }
   


    const handleIssue = (index)=>{
      setBook(prev => prev.map((item, idx) => idx === index ? { ...item, issued: true } : item))
    }

    const handleDelete = (index)=>{
      setBook(prev => prev.filter((_, idx) => idx !== index))
    }

    useEffect(()=>{
      console.log(data)
    },[data])
    useEffect(()=>{
      console.log(book)
    },[book])
  

  
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-8">
        

        <TotalBook booktotal={total} />
        <AddBook handleData={handleData} handleDataSubmit={handleDataSubmit} />
        <TableRecord book={book} onIssue={handleIssue} onDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App