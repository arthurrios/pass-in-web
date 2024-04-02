import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'

export interface AttendeeListProps {}

export function AttendeeList(/* props: AttendeeListProps */) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participants</h1>
        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5 text-sm">
          <Search className="size-4 text-emerald-300" />
          <input
            className="h-auto flex-1 border-0 bg-transparent p-0 text-sm outline-none"
            placeholder="Search participants..."
          />
        </div>
      </div>

      <div className="rounded-lg border border-white/10">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="px-4 py-3 text-left text-sm font-semibold"
              >
                <input
                  className="size-4 rounded border border-white/10 bg-black/20"
                  type="checkbox"
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Participant
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Register date
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Check-in date
              </th>
              <th
                style={{ width: 64 }}
                className="px-4 py-3 text-left text-sm font-semibold"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr
                  key={i}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <input
                      className="size-4 rounded border border-white/10 bg-black/20"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">12383</td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Arthur Rios da Silva
                      </span>
                      <span>arthur.rios007@gmail.com</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    7 days ago
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    3 days ago
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <button className="rounded-md border border-white/20 bg-black/20 p-1.5">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="px-4 py-3 text-sm text-zinc-300" colSpan={3}>
                Showing 10 of 288 items
              </td>
              <td
                className="px-4 py-3 text-right text-sm text-zinc-300"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span>Page 1 of 23</span>
                  <div className="flex gap-1.5">
                    <button className="rounded-md border border-white/20 bg-white/10 p-1.5">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="rounded-md border border-white/20 bg-white/10 p-1.5">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="rounded-md border border-white/20 bg-white/10 p-1.5">
                      <ChevronRight className="size-4" />
                    </button>
                    <button className="rounded-md border border-white/20 bg-white/10 p-1.5">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
