function TableRecord({ book = [], onIssue, onDelete }) {
    
    return (
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-lg">
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-slate-800 text-slate-300">
                            <th className="px-4 py-3 text-left">#</th>
                            <th className="px-4 py-3 text-left">Date issued</th>
                            <th className="px-4 py-3 text-left">Reader</th>
                            <th className="px-4 py-3 text-left">Book</th>
                            <th className="px-4 py-3 text-left">Genre</th>
                            <th className="px-4 py-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">

                        {
                            book.map((row, index) => (
                        <tr key={index} className="hover:bg-slate-800 transition">
                            <td className="px-4 py-3">{index + 1}</td>
                            <td className="px-4 py-3">{row.date}</td>
                            <td className="px-4 py-3">{row.reader}</td>
                            <td className="px-4 py-3">{row.book}</td>
                            <td className="px-4 py-3">
                                <span className="inline-block rounded-full bg-slate-700 px-3 py-1 text-sm text-slate-200">{row.genre}</span>
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex gap-2">
                                    <button onClick={() => onIssue(index)} className="rounded-md bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-500">{row.issued ? 'Issued' : 'Issue'}</button>
                                    <button onClick={() => onDelete(index)} className="rounded-md bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-500">Delete</button>
                                </div>
                            </td>
                        </tr>
                            ))
                        }
                
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableRecord