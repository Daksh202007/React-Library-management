import { useState } from "react"

function AddBook({ handleData,handleDataSubmit}) {
  const [form, setForm] = useState({ reader: "", book: "", genre: "" })

  const update = (next) => {
    setForm(next)
    if (typeof handleData === "function") handleData(next)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const next = { ...form, [name]: value }
    update(next)
  }

  const handleRadio = (e) => {
    const value = e.target.value
    const next = { ...form, genre: value }
    update(next)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (typeof handleData === "function") handleData(form)
    if (typeof handleDataSubmit === "function") handleDataSubmit(form)
    setForm({ reader: "", book: "", genre: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-xl">
      <h2 className="mb-6 text-2xl font-semibold text-white">Add Book</h2>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">Reader</label>
        <input
          type="text"
          placeholder="Enter reader name"
          name="reader"
          value={form.reader}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500"
        />
      </div>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">Book</label>
        <input
          type="text"
          placeholder="Enter book title"
          name="book"
          value={form.book}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <p className="mb-3 text-sm font-medium text-slate-300">Genre</p>
        <div className="flex flex-wrap gap-3">
          <label className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-500">
            <input type="radio"  checked={form.genre === "Fiction"} onChange={handleRadio} name="genre" value="Fiction" className="h-4 w-4 text-blue-500" />
            Fiction
          </label>
          <label className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-500">
            <input type="radio" checked={form.genre === "Programmer"} onChange={handleRadio} name="genre" value="Programmer" className="h-4 w-4 text-blue-500" />
            Programmer
          </label>
          <label className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-500">
            <input type="radio" checked={form.genre === "Cooking"} onChange={handleRadio} name="genre" value="Cooking" className="h-4 w-4 text-blue-500" />
            Cooking
          </label>
        </div>
      </div>

      <button type="submit" className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-blue-500">
        Add Book
      </button>
    </form>
  )
}

export default AddBook