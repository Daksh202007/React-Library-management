function TotalBook({ booktotal }) {
  return (
    <div className="flex w-full max-w-5xl items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        Library desk
      </div>
      <div className="text-2xl font-bold text-white">{booktotal} books</div>
    </div>
  )
}

export default TotalBook