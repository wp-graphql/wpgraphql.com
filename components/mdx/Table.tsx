interface TableProps {
  children: React.ReactNode
}

export function Table({ children }: TableProps) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
        {children}
      </table>
    </div>
  )
}

export function Thead({ children }: TableProps) {
  return (
    <thead className="bg-gray-50 dark:bg-gray-800">
      {children}
    </thead>
  )
}

export function Th({ children }: TableProps) {
  return (
    <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
      {children}
    </th>
  )
}

export function Tbody({ children }: TableProps) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-900">
      {children}
    </tbody>
  )
}

export function Td({ children }: TableProps) {
  return (
    <td className="whitespace-pre-wrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
      {children}
    </td>
  )
} 